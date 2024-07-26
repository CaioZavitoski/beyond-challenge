import styled from 'styled-components'

export const SignUpContainer = styled.div`
  position: relative;
  padding: 2rem;

  @media (min-width: 1024px) {
    padding: 8rem;
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

export const SignUpFormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 350px;
  text-align: center;
`

export const SignUpTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`

export const SignUpDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: ${(props) => props.theme['gray-500']};
`

export const SignUpFormGrid = styled.form`
  display: grid;
  gap: 1rem;
`

export const SignUpInputGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const SignUpLabel = styled.label`
  text-align: left;
  font-size: 0.875rem;
`

export const SignUpInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem;
`

export const SignUpButton = styled.button`
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
`

export const SignUpTermsText = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme['gray-500']};

  a {
    text-decoration: underline;
    color: ${(props) => props.theme['green-500']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['green-800']};
    }
  }
`
