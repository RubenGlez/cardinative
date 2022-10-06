import { useState } from 'react'

export interface UseLiveSearchProps<T> {
  options: T[]
  searchParams: Array<keyof T>
}

export default function useLiveSearch<T>({
  options,
  searchParams
}: UseLiveSearchProps<T>) {
  const [searchText, setSearchText] = useState('')
  const filteredOptions = !searchText
    ? options
    : options.filter(opt => {
        return searchParams.some(searchParam => {
          const paramToCheck = `${opt[searchParam]}`.toLowerCase()
          return paramToCheck.includes(searchText)
        })
      })
  const search = (text: string) => {
    setSearchText(text.toLowerCase())
  }
  return {
    filteredOptions,
    search
  }
}
