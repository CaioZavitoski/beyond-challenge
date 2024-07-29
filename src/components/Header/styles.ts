import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
`

export const HeaderContent = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  gap: 1.5rem;
  padding: 0 1.5rem;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-500']};
    transition: color 0.2s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['black']};
    }
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`

interface SeparatorProps {
  height?: string
}

export const Separator = styled.div<SeparatorProps>`
  height: ${(props) => props.height || '1.5rem'};
  width: 1px;
  background-color: ${(props) => props.theme['gray-200']};
`

export const Spacer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ProfileDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0.5rem;
  border-radius: 20%;
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 2.8rem;
  right: 0;
  background-color: ${(props) => props.theme['white']};
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

export const DropdownItem = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['red-500']};

  &:hover {
    background-color: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['white']};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`
