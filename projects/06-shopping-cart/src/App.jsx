import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from '../config'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 50
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}

    </>

  )
}

export default App
