import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { signIn } from '../../../api/sign-in'
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

const signInSchema = z.object({
  email: z.string().email(),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleAuthenticate({ email }: SignInSchema) {
    try {
      await authenticate({ email })
      toast.success('Login efetuado com sucesso! Redirecionando...')
      await new Promise((resolve) => setTimeout(resolve, 4000))
      navigate('/')
    } catch (err) {
      toast.error('E-mail não encontrado. Tente novamente.')
    }
  }

  return (
    <SignInContainer>
      <SignInFormContainer>
        <SignInTextContainer>
          <h1>Acessar painel</h1>
          <span>Acompanhe seus clientes pelo painel do parceiro!</span>
        </SignInTextContainer>

        <SignInFormContainer>
          <SignInForm onSubmit={handleSubmit(handleAuthenticate)}>
            <SignInInputContainer>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input
                id='email'
                type='email'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
                {...register('email')}
              />
            </SignInInputContainer>

            <button type='submit' disabled={isSubmitting}>
              Acessar painel
            </button>
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
