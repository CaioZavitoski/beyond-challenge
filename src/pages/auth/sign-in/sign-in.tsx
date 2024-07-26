import { Link } from 'react-router-dom'
import {
  Input,
  Label,
  SignInContainer,
  SignInForm,
  SignInFormContainer,
  SignInInputContainer,
  SignInTextContainer,
  SignUpLink,
} from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <SignInFormContainer>
        <SignInTextContainer>
          <h1>Acessar painel</h1>
          <span>Acompanhe seus clientes pelo painel do parceiro!</span>
        </SignInTextContainer>

        <SignInFormContainer>
          <SignInForm>
            <SignInInputContainer>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' />
            </SignInInputContainer>

            <button type='submit'>Acessar painel</button>
          </SignInForm>
        </SignInFormContainer>
      </SignInFormContainer>

      <SignUpLink>
        <Link to='/sign-up'>
          <button>Novo estabelecimento</button>
        </Link>
      </SignUpLink>
    </SignInContainer>
  )
}
