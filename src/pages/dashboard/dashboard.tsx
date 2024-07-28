import { useQuery } from '@tanstack/react-query'
import { getClients } from '../../api/get-clients'
import { Spinner } from '../../components/Spinner'

import { DashboardContainer, NoResults } from './styles'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import { Filters } from './filters'
import { ClientsTable } from './clients-table'
import { Modal } from '../../components/Modal'

export function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { clients, setClients } = useContext(ClientsContext)

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

  useEffect(() => {
    if (result) {
      setClients(result.clients)
    }
  }, [result])

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
      ) : clients.length > 0 ? (
        <ClientsTable clients={clients} />
      ) : (
        <NoResults>
          Nenhum cliente encontrado com os filtros aplicados.
        </NoResults>
      )}
      <Modal />
    </DashboardContainer>
  )
}
