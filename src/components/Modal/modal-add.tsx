import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { addClient as addClientApi } from '../../api/add-client'
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
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  status: z.string().min(1, 'Status é obrigatório'),
})

type ClientSchema = z.infer<typeof clientSchema>

export const ModalAdd = () => {
  const { setModalType, addClient } = useContext(ClientsContext)

  const { mutateAsync: addClientMutation } = useMutation({
    mutationFn: addClientApi,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
  })

  async function onSubmit(data: ClientSchema) {
    try {
      const newClient = await addClientMutation(data)
      addClient(newClient)
      toast.success('Cliente adicionado com sucesso!')
      closeModal()
    } catch (error) {
      toast.error('Erro ao adicionar cliente. Tente novamente.')
    }
  }

  function closeModal() {
    setModalType(null)
  }

  return (
    <>
      <ModalHeader>Adicionar Cliente</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalInputs>
            <ModalLabel>Nome</ModalLabel>
            <Input type='text' {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Email</ModalLabel>
            <Input type='email' {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Telefone</ModalLabel>
            <Input type='text' {...register('phone')} />
            {errors.phone && <span>{errors.phone.message}</span>}
          </ModalInputs>
          <ModalInputs>
            <ModalLabel>Status</ModalLabel>
            <Select {...register('status')}>
              <option value='Ativo'>Ativo</option>
              <option value='Inativo'>Inativo</option>
            </Select>
            {errors.status && <span>{errors.status.message}</span>}
          </ModalInputs>
        </ModalContent>
        <ModalActions>
          <button type='button' className='close' onClick={closeModal}>
            Cancelar
          </button>
          <button type='submit' className='confirm' disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </button>
        </ModalActions>
      </form>
    </>
  )
}
