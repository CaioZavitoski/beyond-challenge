import { ComponentProps } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import { StyledNavLink } from './styles'

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation()

  return <StyledNavLink {...props} data-current={pathname === props.to} />
}
