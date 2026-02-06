import styled, { css } from "styled-components";

interface AvatarPictureProps {
  hasBorder?: boolean
}

export const AvatarPicture = styled.img<AvatarPictureProps>`
  ${({ theme, hasBorder }) => css`
    width: 60px;
    height: 60px;
    border-radius: ${theme.radius.md};

    ${ hasBorder && css`
      border: 4px solid ${theme.colors.gray800};
      outline: 2px solid ${theme.colors.gray600};
    ` }
  `}
`
