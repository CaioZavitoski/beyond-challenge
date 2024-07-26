import styled from 'styled-components'

export const SignInContainer = styled.div`
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export const SignUpLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.4s;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
      color: #fff;
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin-top: 0;

    @media (min-width: 768px) {
      right: 2rem;
      top: 2rem;
    }
  }
`

export const SignInFormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 350px;

  button {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme['green-500']};
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:disabled {
      background-color: ${(props) => props.theme['gray-200']};
      cursor: not-allowed;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`

export const SignInTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SignInFormGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const SignInForm = styled.form`
  display: grid;
  gap: 1rem;
`

export const SignInInputContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem;
`
