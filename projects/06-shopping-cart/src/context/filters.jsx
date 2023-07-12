import { createContext, useState } from 'react'

// crear el contexto

export const FilterContext = createContext()

// crear el provider para proveer el contexto
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
