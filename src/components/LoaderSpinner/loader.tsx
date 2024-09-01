import { ClipLoader } from 'react-spinners'
import { CSSProperties } from 'react'

const loaderStylesOverride: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  color: '#FFFFFF',
}

interface LoaderProps {
  size?: number
  color?: string
}

export function LoaderSpinner({ size = 62, color = '#fff' }: LoaderProps) {
  return (
    <ClipLoader color={color} cssOverride={loaderStylesOverride} size={size} />
  )
}
