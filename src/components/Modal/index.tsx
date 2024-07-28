import { useContext } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import { ModalDelete } from './modal-delete'
import { ModalDetails } from './modal-details'
import { ModalEdit } from './modal-edit'
import { ModalContainer, ModalOverlay } from './styles'

export const Modal = () => {
  const { modalType, selectedClient } = useContext(ClientsContext)

  if (!modalType || !selectedClient) return null

  return (
    <ModalOverlay>
      <ModalContainer>
        {modalType === 'details' && <ModalDetails />}
        {modalType === 'edit' && <ModalEdit />}
        {modalType === 'delete' && <ModalDelete />}
      </ModalContainer>
    </ModalOverlay>
  )
}
