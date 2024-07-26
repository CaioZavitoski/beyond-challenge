import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 1024px) {
    display: grid;
    max-width: none;
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
`

export const AuthSidebar = styled.div`
  display: none;
  position: relative;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #f5f5f5;
  padding: 2.5rem;
  color: #6b7280;

  @media (min-width: 1024px) {
    display: flex;
  }
`

export const AuthSidebarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  font-weight: 500;
  color: #1f2937;
  font-family: 'Times new Roman', sans-serif;
`

export const AuthSidebarFooter = styled.footer`
  margin-top: auto;
  font-size: 0.875rem;
`

export const AuthContent = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
