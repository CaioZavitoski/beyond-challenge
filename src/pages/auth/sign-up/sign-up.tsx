import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { RegisterCompany } from '../../../api/register-company'
import {
  SignUpButton,
  SignUpContainer,
  SignUpDescription,
  SignUpFormContainer,
  SignUpFormGrid,
  SignUpInput,
  SignUpInputGroup,
  SignUpLabel,
  SignUpLink,
  SignUpTermsText,
  SignUpTitle,
} from './styles'

const signUpSchema = z.object({
  companyName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: registerCompany } = useMutation({
    mutationFn: RegisterCompany,
  })

  async function handleRegisterCompany({
    companyName,
    managerName,
    email,
    phone,
  }: SignUpSchema) {
    try {
      await registerCompany({ companyName, managerName, email, phone })

      toast.success('Estabelecimento cadastrado!', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate(`/sign-in?email=${email}`)
          },
        },
      })
    } catch (err) {
      toast.error('Erro ao registrar estabelecimento!')
    }
  }

  return (
    <SignUpContainer>
      <SignUpFormContainer>
        <SignUpTitle>Criar conta</SignUpTitle>
        <SignUpDescription>
          Seja um parceiro e comece suas vendas!
        </SignUpDescription>
        <SignUpFormGrid onSubmit={handleSubmit(handleRegisterCompany)}>
          <SignUpInputGroup>
            <SignUpLabel htmlFor='name'>Nome do estabelecimento</SignUpLabel>
            <SignUpInput id='name' type='text' {...register('companyName')} />
          </SignUpInputGroup>
          <SignUpInputGroup>
            <SignUpLabel htmlFor='managerName'>Seu nome</SignUpLabel>
            <SignUpInput
              id='managerName'
              type='text'
              {...register('managerName')}
            />
          </SignUpInputGroup>
          <SignUpInputGroup>
            <SignUpLabel htmlFor='email'>Seu e-mail</SignUpLabel>
            <SignUpInput
              id='email'
              type='email'
              autoComplete='email'
              {...register('email')}
            />
          </SignUpInputGroup>
          <SignUpInputGroup>
            <SignUpLabel htmlFor='phone'>Celular</SignUpLabel>
            <SignUpInput
              id='phone'
              placeholder='(99) 99999-9999'
              type='tel'
              {...register('phone')}
            />
          </SignUpInputGroup>
          <SignUpButton disabled={isSubmitting} type='submit'>
            Finalizar cadastro
          </SignUpButton>
        </SignUpFormGrid>
        <SignUpTermsText>
          Ao continuar, você concorda com nossos{' '}
          <Link to='/sign-up'>Termos de serviço</Link> e{' '}
          <Link to='/sign-up'>Políticas de privacidade</Link>.
        </SignUpTermsText>
      </SignUpFormContainer>
      <SignUpLink>
        <Link to='/sign-in'>
          <button> Fazer login</button>
        </Link>
      </SignUpLink>
    </SignUpContainer>
  )
}
