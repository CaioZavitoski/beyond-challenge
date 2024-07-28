import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getClients } from '../../api/get-clients'
import { Spinner } from '../../components/Spinner'
import { ClientsTable } from './clients-table'
import { Filters } from './filters'
import { DashboardContainer, NoResults } from './styles'

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

  return (
    <DashboardContainer>
      <h1>Clientes</h1>
      <Filters
        filters={filters}
        setFilters={setFilters}
        setSearchParams={setSearchParams}
      />
      {isLoadingOrders ? (
        <Spinner />
      ) : result && result.clients.length > 0 ? (
        <ClientsTable clients={result.clients} />
      ) : (
        <NoResults>
          Nenhum cliente encontrado com os filtros aplicados.
        </NoResults>
      )}
    </DashboardContainer>
  )
}
