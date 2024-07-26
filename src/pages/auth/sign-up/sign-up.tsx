import { Link } from 'react-router-dom'
import {
  AuthContainer,
  Button,
  Description,
  FormContainer,
  FormGrid,
  Input,
  InputGroup,
  Label,
  SignUpLink,
  TermsText,
  Title,
} from './styles'

export function SignUp() {
  return (
    <AuthContainer>
      <FormContainer>
        <Title>Criar conta</Title>
        <Description>
          Seja um parceiro <span className='font-semibold'>da Beyond</span> e
          comece suas vendas!
        </Description>
        <FormGrid>
          <InputGroup>
            <Label htmlFor='name'>Nome do negócio</Label>
            <Input id='name' type='text' />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='managerName'>Seu nome</Label>
            <Input id='managerName' type='text' />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='email'>Seu e-mail</Label>
            <Input id='email' type='email' autoComplete='email' />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='phone'>Celular</Label>
            <Input id='phone' placeholder='(99) 99999-9999' type='tel' />
          </InputGroup>
          <Button type='submit'>Finalizar cadastro</Button>
        </FormGrid>
        <TermsText>
          Ao continuar, você concorda com nossos{' '}
          <Link to='/sign-up'>Termos de serviço</Link> e{' '}
          <Link to='/sign-up'>Políticas de privacidade</Link>.
        </TermsText>
      </FormContainer>
      <SignUpLink>
        <Link to='/sign-in'>
          <button> Fazer login</button>
        </Link>
      </SignUpLink>
    </AuthContainer>
  )
}
