import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-out;

  @media (max-width: 600px) {
    width: 95%;
    padding: 1.5rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ModalHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-800']};
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    margin: 0;
    color: ${(props) => props.theme['gray-500']};

    span {
      color: ${(props) => props.theme['gray-800']};
      font-weight: bold;
    }
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  button {
    width: 100px;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    width: 100%;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  .close {
    background: ${(props) => props.theme['red-500']};
    color: white;
  }

  .confirm {
    background: ${(props) => props.theme['green-500']};
    color: white;
  }

  .delete {
    background: ${(props) => props.theme['red-500']};
    color: white;
  }
`
export const ModalInputs = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['red-500']};
    font-size: 0.875rem;
  }
`

export const ModalLabel = styled.label`
  text-align: left;
  font-size: 0.875rem;
  font-weight: bold;
`
