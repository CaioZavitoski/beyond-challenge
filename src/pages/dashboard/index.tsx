import { useQuery } from '@tanstack/react-query'
import { Search, SquarePen, Trash2 } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { getClients } from '../../api/get-clients'
import { Spinner } from '../../components/Spinner'
import {
  ActionButton,
  ButtonGroup,
  ClientsTable,
  ClientsTableContainer,
  DashboardContainer,
  FilterButton,
  FiltersContainer,
  Input,
  Select,
  StatusBadge,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  NoResults,
} from './styles'
import { useState } from 'react'

export function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [filters, setFilters] = useState({
    id: searchParams.get('id') || '',
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    status: searchParams.get('status') || '',
  })

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: [
      'clients',
      filters.id,
      filters.name,
      filters.email,
      filters.phone,
      filters.status,
    ],
    queryFn: () =>
      getClients({
        id: filters.id,
        name: filters.name,
        email: filters.email,
        phone: filters.phone,
        status: filters.status,
      }),
  })

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    })
  }

  const handleClearFilters = () => {
    setFilters({
      id: '',
      name: '',
      email: '',
      phone: '',
      status: '',
    })
    setSearchParams({})
  }

  return (
    <DashboardContainer>
      <h1>Clientes</h1>
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

        <FilterButton onClick={handleClearFilters}>
          Remover filtros
        </FilterButton>
      </FiltersContainer>
      <ClientsTableContainer>
        {isLoadingOrders ? (
          <Spinner />
        ) : result && result.clients.length > 0 ? (
          <ClientsTable>
            <TableHeader>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>
                    <StatusBadge status={client.status}>
                      {client.status}
                    </StatusBadge>
                  </TableCell>

                  <TableCell
                    style={{
                      width: '1%',
                    }}
                  >
                    <ButtonGroup>
                      <ActionButton variant='details'>
                        <Search />
                      </ActionButton>
                      <ActionButton variant='edit'>
                        <SquarePen />
                      </ActionButton>
                      <ActionButton variant='delete'>
                        <Trash2 />
                      </ActionButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ClientsTable>
        ) : (
          <NoResults>
            Nenhum cliente encontrado com os filtros aplicados.
          </NoResults>
        )}
      </ClientsTableContainer>
    </DashboardContainer>
  )
}
