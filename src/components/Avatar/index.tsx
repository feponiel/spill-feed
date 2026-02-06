import { ImgHTMLAttributes } from "react";
import { AvatarPicture } from "./styles";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  url: string
  hasBorder: boolean
}

export function Avatar({ url, hasBorder = true }: AvatarProps) {
  return (
    <AvatarPicture src={url} hasBorder={hasBorder}></AvatarPicture>
  )
}
