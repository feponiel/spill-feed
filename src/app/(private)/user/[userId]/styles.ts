"use client"

import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 1000px;
    display: grid;
    grid-template-columns: 260px 1fr;
    align-items: flex-start;
    gap: ${theme.space[8]};
    margin: ${theme.space[8]} auto;
    padding: 0 ${theme.space[4]};
  `}
`

export const UserShowcase = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[8]};
  `}
`

export const UserProfileInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: ${theme.space[6]};
    background: ${theme.colors.shade800};
    border-radius: ${theme.radius.md};
    overflow: hidden;

    header {
      width: 100%;
    }
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 120px;
    background-color: ${theme.colors.shade300};
    object-fit: cover;
  `}
`

export const UserProfileDisplay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 3rem - 6px);
    padding: 0 ${theme.space[6]};

    img {
      width: 6rem;
      height: 6rem;
    }
  `}
`

export const UserProfilePresentation = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.space[4]};
    text-align: center;

    strong {
      line-height: ${theme.lineHeights.base};
      color: ${theme.colors.shade100};
    }

    span {
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.shade400};
    }
  `}
`
