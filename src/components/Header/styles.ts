"use client"

import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.space[5]} 0;
    background: ${theme.colors.gray800};
  `}
`
