import styled, { css } from "styled-components";

export const EditProfileModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[4]};

    input {
      width: 400px;
    }

    button {
      margin-top: ${theme.space[4]};
      padding: ${theme.space[4]} ${theme.space[6]};
      font-weight: bold;
      color: ${theme.colors.white};
      background: ${theme.colors.accentColorDark};
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