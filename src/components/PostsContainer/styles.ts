import styled, { css } from "styled-components";

export const StyledPostsContainer = styled.div`
  width: 100%;

  ${({ theme }) => css`
    > header {
      margin-bottom: ${theme.space[8]};
      padding-bottom: ${theme.space[4]};
      border-bottom: 1px solid ${theme.colors.accentColor};
    }
  `}
`

export const NoPostsMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes["xl"]};
    color: ${theme.colors.shade400};
  `}
`

export const CreatePostButton = styled.button`
  ${({ theme }) => css`
    position: fixed;
    right: calc((100vw - 1000px + ${theme.space[8]}) / 2);
    bottom: 5%;
    padding: ${theme.space[4]};
    line-height: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.accentColor};
    border: none;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: .2s;

    &:hover {
      background: ${theme.colors.accentColorDark};
    }

    svg {
      font-size: ${theme.fontSizes["2xl"]};
    }
  `}
`