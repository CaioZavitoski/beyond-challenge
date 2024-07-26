import styled from 'styled-components'

export const DashboardContainer = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.black};
  margin-top: 1rem;
`

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem;
  color: ${(props) => props.theme['gray-800']};
`

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem;
  width: 200px;

  color: ${(props) => props.theme['gray-500']};
`

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

export const ClientsTableContainer = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

export const ClientsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeader = styled.thead`
  &:first-child {
    background-color: ${(props) => props.theme.white};
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.white};
  }

  &:not(:first-child):nth-child(even) {
    background-color: ${(props) => props.theme['green-100']};
  }
`

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  text-align: left;
`
interface StatusBadgeProps {
  status: string
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.black};

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.status === 'Ativo'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

interface ActionButtonProps {
  variant?: 'details' | 'delete' | 'edit'
}

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 50px;

  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'details':
        return props.theme['green-500']
      case 'delete':
        return props.theme['red-500']
      case 'edit':
        return props.theme['yellow-500']
      default:
        return props.theme['gray-500']
    }
  }};

  color: ${(props) => props.theme.white};
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

export const NoResults = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: ${(props) => props.theme['gray-600']};
`
