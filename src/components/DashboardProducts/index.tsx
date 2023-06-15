'use client'

import { values } from '@/types'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SearchOrAggregate from '../SearchOrAggregate'
import './styles.css'
import TableProducts from '../TableProducts'

const DashboardProducts = ({ products }: { products: values[] }): JSX.Element => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [productsFiltered, setProductsFiltered] = useState<values[]>([...products])
  const [pagination, setPagination] = useState<number[]>([0, 5])
  const [pages, setPages] = useState<number[]>([])
  const [pageSelected, setPageSelected] = useState<number>(1)

  // Refresh the router on component mount
  useEffect(() => {
    router.refresh()
    console.log('refresh')
  }, [])

  // Calculate the total number of pages based on the filtered products
  useEffect(() => {
    const pages = Math.ceil(productsFiltered.length / 5)
    const pagesArray = []

    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i)
    }

    setPages(pagesArray)

    // Reset the selected page if it exceeds the available pages
    if (pagesArray.length < pageSelected) {
      setPageSelected(1)
    }
  }, [productsFiltered])

  // Filter products based on the search query
  useEffect(() => {
    if (search === '') {
      setProductsFiltered([...products])
      return
    }

    const results = products.filter((product: values) => {
      const valuesProduct = {
        id: product.id,
        name: product.name,
        description: product.description
      }

      // Join only three features of the product to search
      return Object.values(valuesProduct).join(' ').toLowerCase().includes(search.toLowerCase())
    })

    setProductsFiltered(results)
    setPagination([0, 5])
  }, [search])

  // Update pagination range when the selected page changes
  useEffect(() => {
    setPagination([(pageSelected * 5) - 5, pageSelected * 5])
  }, [pageSelected])

  return (
    <section className='dashboard-section'>
      <article className='dashboard-container'>
        <SearchOrAggregate search={search} setSearch={setSearch} />
        <TableProducts
          products={products}
          productsToShow={productsFiltered.slice(pagination[0], pagination[1])}
          setProductsFiltered={setProductsFiltered}
          results={productsFiltered.length}
          pages={pages}
          setPageSelected={setPageSelected}
        />
      </article>
    </section>
  )
}

export default DashboardProducts
