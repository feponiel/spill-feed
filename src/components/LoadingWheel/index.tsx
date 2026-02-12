import { StyledLoadingWheel } from "./styles"

export interface LoadingWheelProps {
  size?: 'sm' | 'md' |'lg'
}

export function LoadingWheel({ size = "sm" }: LoadingWheelProps) {
  return <StyledLoadingWheel size={size}></StyledLoadingWheel>
}
