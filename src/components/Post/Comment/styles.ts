import styled, { css } from "styled-components";

export const StyledComment = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.space[4]};
    margin-top: ${theme.space[6]};

    > img {
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const CommentWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    footer {
      margin-top: ${theme.space[4]};
    }
  `}
`

export const CommentContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[4]};
    background: ${theme.colors.gray700};
    border-radius: ${theme.radius.md};

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    p {
      margin-top: ${theme.space[4]};
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray300};
    }
  `}
`

export const CommentAuthorAndTime = styled.div`
  ${({ theme }) => css`
    strong {
      display: block;
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.sm};
    }

    span {
      display: block;
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray400};
    }

    time {
      display: flex;
      align-items: center;
      gap: ${theme.space[1]};
      margin-top: ${theme.space[1]};
      font-size: ${theme.fontSizes.xxs};
      color: ${theme.colors.gray400};
    }
  `}
`

export const CommentOptionsMenuButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;
    color: ${theme.colors.gray100};
    cursor: pointer;
    transition: .2s;

    &:hover {
      color: ${theme.colors.accentColor};
    }
  `}
`

export const EditionWarn = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.gray400};
  `}
`
