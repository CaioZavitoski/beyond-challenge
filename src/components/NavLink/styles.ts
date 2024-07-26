import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-500']};
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme['black']};
  }

  &[data-current='true'] {
    color: ${(props) => props.theme['black']};
  }
`
