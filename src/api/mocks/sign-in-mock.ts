import { http, HttpResponse } from 'msw'

interface SignInPayload {
  email: string
  password: string
}

export const signInMock = http.post<never, SignInPayload>(
  '/authenticate',
  async ({ request }) => {
    const { email, password } = await request.json()

    if (email !== '' && password !== '') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, {
      status: 401,
    })
  },
)
