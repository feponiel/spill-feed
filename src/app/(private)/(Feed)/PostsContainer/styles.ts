import styled, { css } from "styled-components";

export const CreatePostButton = styled.button`
  ${({ theme }) => css`
    position: fixed;
    right: calc((100vw - 1000px + ${theme.space[8]}) / 2);
    bottom: 5%;
    padding: ${theme.space[4]};
    line-height: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.accentColorDark};
    border: none;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: .2s;

    &:hover {
      background: ${theme.colors.accentColor};
    }
  `}
`