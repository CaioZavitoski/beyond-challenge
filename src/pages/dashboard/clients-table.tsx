import { Search, SquarePen, Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import {
  ActionButton,
  ButtonGroup,
  ClientsTableContainer,
  StatusBadge,
  ClientsTable as Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './styles'

interface Client {
  id: string
  name: string
  email: string
  phone: string
  status: string
}

interface ClientsTableProps {
  clients: Client[]
}

export function ClientsTable({ clients }: ClientsTableProps) {
  const { setSelectedClient, setModalType } = useContext(ClientsContext)

  const openModal = (type: 'details' | 'edit' | 'delete', client: Client) => {
    setSelectedClient(client)
    setModalType(type)
  }

  return (
    <ClientsTableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
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
              <TableCell style={{ width: '1%' }}>
                <ButtonGroup>
                  <ActionButton
                    variant='details'
                    onClick={() => openModal('details', client)}
                  >
                    <Search />
                  </ActionButton>
                  <ActionButton
                    variant='edit'
                    onClick={() => openModal('edit', client)}
                  >
                    <SquarePen />
                  </ActionButton>
                  <ActionButton
                    variant='delete'
                    onClick={() => openModal('delete', client)}
                  >
                    <Trash2 />
                  </ActionButton>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ClientsTableContainer>
  )
}
