import styled from 'styled-components'

export const StyledSpinner = styled.div`
  border: 16px solid ${(props) => props.theme['green-800']};
  border-top: 16px solid ${(props) => props.theme['green-500']};
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
