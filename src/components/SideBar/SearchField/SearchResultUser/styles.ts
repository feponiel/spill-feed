import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledSearchResultUser = styled.li``

export const SearchResultUserLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[3]};
    padding: ${theme.space[3]} 0;
    text-decoration: none;

    > img {
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const UserInfo = styled.div`
  ${({ theme }) => css`
    strong {
      display: block;
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.shade100};
    }

    span {
      line-height: ${theme.lineHeights.base};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.shade400};
    }
  `}
`