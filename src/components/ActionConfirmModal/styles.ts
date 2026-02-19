import { DialogClose } from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";

export const ModalFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.space[2]};
  `}
`

export const CancelButton = styled(DialogClose)`
  ${({ theme }) => css`
    margin-top: ${theme.space[4]};
    padding: ${theme.space[4]} ${theme.space[6]};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.shade400};
    border: none;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: background-color .1s;
    flex: 1;

    &:hover {
      background: ${theme.colors.shade300};
    }
  `}
`

export const ConfirmButton = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.space[4]};
    padding: ${theme.space[4]} ${theme.space[6]};
    font-weight: bold;
    color: ${theme.colors.red500};
    background: none;
    border: 2px solid ${theme.colors.red500};
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: background-color .1s;
    flex: 1;

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.red500};
    }
  `}
`

export const ModalDescription = styled.p`
  max-width:450px;
`