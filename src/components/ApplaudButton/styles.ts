import styled, { css } from "styled-components";

export const StyledApplaudButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.gray400};
    background: none;
    border: none;
    border-radius: ${theme.radius.xs};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.accentColor};
    }

    svg {
      margin-right: ${theme.space[2]};
    }

    span[aria-label]::before {
      content: '•';
      padding: ${theme.space[1]};
    }
  `}
`
