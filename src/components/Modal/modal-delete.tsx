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

export function ModalDelete() {
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
      <ModalHeader>Deletar Cliente</ModalHeader>
      <ModalContent>
        <p>Tem certeza que deseja deletar {selectedClient?.name}?</p>
      </ModalContent>
      <ModalActions>
        <button className='cancel' onClick={closeModal}>
          Cancelar
        </button>
        <button className='delete' onClick={() => closeModal()}>
          Deletar
        </button>
      </ModalActions>
    </div>
  )
}
