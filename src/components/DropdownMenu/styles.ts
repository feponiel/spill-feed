import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import styled, { css } from "styled-components"

export const DropdownContent = styled(DropdownMenuContent)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: ${theme.colors.gray900};
    border: 1px solid ${theme.colors.gray700};
    border-radius: ${theme.radius.md};
    overflow: hidden;

    & > * {
      display: flex;
      align-items: center;
      gap: ${theme.space[2]};
      padding: ${theme.space[3]} ${theme.space[2]};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray100};
      cursor: pointer;
      outline: none;

      &:hover,
      &:focus-within {
        color: ${theme.colors.white};
        background: ${theme.colors.accentColorDark};
      }
    }
  `}
`
