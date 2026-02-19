import styled, { css } from "styled-components";

export const StyledSideBar = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[4]};
  `}
`