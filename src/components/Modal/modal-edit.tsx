import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { z } from 'zod'
import { updateClient as updateClientApi } from '../../api/update-client'
import { ClientsContext } from '../../contexts/ClientsContext'
import { Input, Select } from '../../pages/dashboard/styles'
import {
  ModalActions,
  ModalContent,
  ModalHeader,
  ModalInputs,
  ModalLabel,
} from './styles'

const clientSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  status: z.string().min(1, 'Status é obrigatório'),
})

export type ClientSchema = z.infer<typeof clientSchema>

export function ModalEdit() {
  const { selectedClient, updateClients, setModalType, setSelectedClient } =
    useContext(ClientsContext)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
  })

  const { mutateAsync: updateClient } = useMutation({
    mutationFn: updateClientApi,
  })

  function closeModal() {
    setModalType(null)
    setSelectedClient(null)
  }

  async function onSubmit(data: ClientSchema) {
    try {
      await updateClient(data)
      updateClients(data)
      toast.success('Cliente atualizado com sucesso!')
      closeModal()
    } catch (_) {
      toast.error('Erro ao atualizar cliente. Tente novamente.')
    }
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
      <ModalHeader>Editar Cliente</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalInputs>
            <ModalLabel>Nome</ModalLabel>
            <Input type='text' {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Email:</ModalLabel>
            <Input type='email' {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Telefone:</ModalLabel>
            <Input type='text' {...register('phone')} />
            {errors.phone && <span>{errors.phone.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Status:</ModalLabel>
            <Select {...register('status')}>
              <option value='Ativo'>Ativo</option>
              <option value='Inativo'>Inativo</option>
            </Select>
            {errors.status && <span>{errors.status.message}</span>}
          </ModalInputs>
        </ModalContent>
        <ModalActions>
          <button type='button' onClick={closeModal}>
            Cancelar
          </button>
          <button type='submit' className='confirm' disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </button>
        </ModalActions>
      </form>
    </div>
  )
}
