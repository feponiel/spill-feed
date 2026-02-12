import { DialogTrigger } from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";

export const StyledSideBar = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors.gray800};
    border-radius: ${theme.radius.md};
    overflow: hidden;

    &.loading {
      padding: ${theme.space[4]} 0;
    }

    header {
      width: 100%;
    }

    footer {
      margin-top: ${theme.space[6]};
      padding: ${theme.space[6]} ${theme.space[8]} ${theme.space[8]};
      border-top: 1px solid ${theme.colors.gray600};
    }
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 72px;
    background-color: ${theme.colors.gray300};
    object-fit: cover;
  `}
`

export const ProfileDisplay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - ${theme.space[6]} - 6px);

    strong {
      margin-top: ${theme.space[4]};
      line-height: ${theme.lineHeights.base};
      color: ${theme.colors.gray100};
    }

    span {
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray400};
    }
  `}
`

export const EditProfileButton = styled(DialogTrigger)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.space[2]};
    height: 50px;
    padding: 0 ${theme.space[6]};
    text-decoration: none;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.accentColorDark};
    background: transparent;
    border: 1px solid ${theme.colors.accentColorDark};
    border-radius: ${theme.radius.md};
    transition: .1s;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.accentColorDark};
    }
  `}
`
