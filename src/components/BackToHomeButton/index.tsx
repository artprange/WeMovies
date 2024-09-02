import { BackToHomeButton as StyledBackToHomeButton } from './styles'
import { BackToHomeButtonProps } from './types'



export function BackToHomeButton({ children }: BackToHomeButtonProps) {
  return <StyledBackToHomeButton>{children}</StyledBackToHomeButton>
}
