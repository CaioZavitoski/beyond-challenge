import { http, HttpResponse } from 'msw'

interface SignUpPayload {
  companyName: string
}

export const registerCompanyMock = http.post<never, SignUpPayload>(
  '/companys',
  async ({ request }) => {
    const { companyName } = await request.json()

    if (companyName !== '') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse(null, {
      status: 400,
    })
  },
)
