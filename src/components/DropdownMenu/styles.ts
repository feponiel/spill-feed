import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import styled, { css } from "styled-components"

export const DropdownContent = styled(DropdownMenuContent)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: ${theme.colors.shade900};
    border: 1px solid ${theme.colors.shade700};
    border-radius: ${theme.radius.md};
    overflow: hidden;

    & > * {
      display: flex;
      align-items: center;
      gap: ${theme.space[2]};
      padding: ${theme.space[3]} ${theme.space[2]};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.shade100};
      cursor: pointer;
      outline: none;

      &:hover,
      &:focus-within {
        color: ${theme.colors.white};
        background: ${theme.colors.accentColor};
      }

      svg {
        font-size: ${theme.fontSizes.xl};
      }
    }
  `}
`
