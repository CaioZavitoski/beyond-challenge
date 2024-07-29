import { useContext } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import { ModalAdd } from './modal-add'
import { ModalDelete } from './modal-delete'
import { ModalDetails } from './modal-details'
import { ModalEdit } from './modal-edit'
import { ModalContainer, ModalOverlay } from './styles'

export const Modal = () => {
  const { modalType, selectedClient } = useContext(ClientsContext)

  if (!modalType) return null

  return (
    <ModalOverlay>
      <ModalContainer>
        {modalType === 'details' && selectedClient && <ModalDetails />}
        {modalType === 'add' && <ModalAdd />}
        {modalType === 'edit' && selectedClient && <ModalEdit />}
        {modalType === 'delete' && selectedClient && <ModalDelete />}
      </ModalContainer>
    </ModalOverlay>
  )
}
