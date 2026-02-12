import { DialogClose } from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";

export const DeletionModalFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.space[2]};
  `}
`

export const CancelDeletionButton = styled(DialogClose)`
  ${({ theme }) => css`
    margin-top: ${theme.space[4]};
    padding: ${theme.space[4]} ${theme.space[6]};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.gray400};
    border: none;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: background-color .1s;
    flex: 1;

    &:hover {
      background: ${theme.colors.gray300};
    }
  `}
`

export const ConfirmDeletionButton = styled.button`
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

export const DeletionMessage = styled.p`
  max-width:450px;
`