import { BackToHomeButton as StyledBackToHomeButton } from './styles'

type BackToHomeButtonProps = {
  children: React.ReactNode
}

export function BackToHomeButton({ children }: BackToHomeButtonProps) {
  return <StyledBackToHomeButton>{children}</StyledBackToHomeButton>
}
