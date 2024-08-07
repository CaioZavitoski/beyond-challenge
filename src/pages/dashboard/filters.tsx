import { useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { FilterButton, FiltersContainer, Input, Select } from './styles'

interface FiltersProps {
  filters: {
    id: string
    name: string
    email: string
    phone: string
    status: string
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      id: string
      name: string
      email: string
      phone: string
      status: string
    }>
  >
  setSearchParams: (params: URLSearchParams) => void
}

export function Filters({
  filters,
  setFilters,
  setSearchParams,
}: FiltersProps) {
  const [debouncedFilters] = useDebounce(filters, 2000)

  useEffect(() => {
    setFilters(debouncedFilters)
  }, [debouncedFilters, setFilters])

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const handleClearFilters = () => {
    setFilters({
      id: '',
      name: '',
      email: '',
      phone: '',
      status: '',
    })
    setSearchParams(new URLSearchParams())
  }

  return (
    <FiltersContainer>
      <Input
        type='text'
        placeholder='Nome do cliente'
        name='name'
        value={filters.name || ''}
        onChange={handleFilterChange}
      />
      <Input
        type='text'
        placeholder='Email do cliente'
        name='email'
        value={filters.email}
        onChange={handleFilterChange}
      />
      <Select
        name='status'
        value={filters.status}
        onChange={handleFilterChange}
      >
        <option value=''>Status</option>
        <option value='Ativo'>Ativo</option>
        <option value='Inativo'>Inativo</option>
      </Select>

      <FilterButton onClick={handleClearFilters}>Remover filtros</FilterButton>
    </FiltersContainer>
  )
}
