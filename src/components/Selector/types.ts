export interface SelectorOption {
  label: string
  value: string
}
export interface SelectorProps {
  options: SelectorOption[]
  selected: SelectorOption['value']
  placeholder: string
  onSelect: (selected: SelectorOption['value']) => void
}
