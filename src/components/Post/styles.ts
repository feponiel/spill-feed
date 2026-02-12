import styled, { css } from "styled-components";

export const StyledPost = styled.article`
  ${({ theme }) => css`
    padding: ${theme.space[10]};
    background: ${theme.colors.gray800};
    border-radius: ${theme.radius.md};

    & + & {
      margin-top: ${theme.space[8]}
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`

export const InfoDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Info = styled.div`
  ${({ theme }) => css`
    strong {
      display: block;
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

export const PostDate = styled.time`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    margin-top: ${theme.space[1]};
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.gray400};
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

export const Content = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.space[6]};
    line-height: ${theme.lineHeights.base};
    color: ${theme.colors.gray300};
  `}
`

export const CommentForm = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.space[6]};
    padding-top: ${theme.space[6]};
    border-top: 1px solid ${theme.colors.gray600};

    &:focus-within footer {
      max-height: none;
      visibility: visible;
    }

    span {
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.gray100};
    }

    textarea {
      width: 100%;
      height: 6rem;
      margin-top: ${theme.space[4]};
      padding: ${theme.space[4]};
      line-height: ${theme.lineHeights.short};
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.gray100};
      background: ${theme.colors.gray900};
      border: none;
      border-radius: ${theme.radius.md};
      resize: none;
    }

    footer {
      max-height: 0;
      visibility: hidden;
    }
  `}
`

export const SubmitCommentButton = styled.button`
  ${({ theme }) => css`
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
  `}
`

export const CommentList = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.space[8]};
  `}
`

export const PostOptionsMenuButton = styled.button`
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
