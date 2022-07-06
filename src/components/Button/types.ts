export interface ButtonProps {
  text: string
  size?: 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl'
  type?: 'primary' | 'secondary' | 'success' | 'danger'
  isDisabled?: boolean
  isFullWidth?: boolean
  onPress: () => void
}

export type StyledButtonProps = Omit<ButtonProps, 'text'>
