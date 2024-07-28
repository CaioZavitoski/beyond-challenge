import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { ClientsContext } from '../../contexts/ClientsContext'
import { ModalActions, ModalContent, ModalHeader } from './styles'

const clientSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  status: z.string().min(1, 'Status é obrigatório'),
})

export type ClientSchema = z.infer<typeof clientSchema>

export function ModalDetails() {
  const { selectedClient, setModalType, setSelectedClient } =
    useContext(ClientsContext)

  const { setValue } = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
  })

  function closeModal() {
    setModalType(null)
    setSelectedClient(null)
  }

  useEffect(() => {
    if (selectedClient) {
      setValue('id', selectedClient.id)
      setValue('name', selectedClient.name)
      setValue('email', selectedClient.email)
      setValue('phone', selectedClient.phone)
      setValue('status', selectedClient.status)
    }
  }, [selectedClient, setValue])

  return (
    <div>
      <ModalHeader>Detalhes do Cliente</ModalHeader>
      <ModalContent>
        <p>
          Nome: <span>{selectedClient?.name}</span>
        </p>
        <p>
          Email: <span>{selectedClient?.email}</span>
        </p>
        <p>
          Telefone: <span>{selectedClient?.phone}</span>
        </p>
        <p>
          Status: <span>{selectedClient?.status}</span>
        </p>
      </ModalContent>
      <ModalActions>
        <button className='close' onClick={closeModal}>
          Fechar
        </button>
      </ModalActions>
    </div>
  )
}
