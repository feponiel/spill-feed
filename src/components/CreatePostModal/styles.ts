import styled, { css } from "styled-components";

export const CreatePostModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[4]};

    textarea {
      width: 400px;
      resize: none;
    }

    button {
      margin-top: ${theme.space[4]};
      padding: ${theme.space[4]} ${theme.space[6]};
      font-weight: bold;
      color: ${theme.colors.white};
      background: ${theme.colors.accentColor};
      border: none;
      border-radius: ${theme.radius.md};
      cursor: pointer;
      transition: background-color .1s;

      &:disabled {
        opacity: .7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${theme.colors.accentColor};
      }
    }
  `}
`
