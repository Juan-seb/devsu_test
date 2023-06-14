'use client'

import { values } from '@/types'
import { useState, useEffect } from 'react'
import SearchOrAggregate from '../SearchOrAggregate'
import './styles.css'
import TableProducts from '../TableProducts'

const DashboardProducts = ({ products }: { products: values[] }): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const [productsFiltered, setProductsFiltered] = useState<values[]>([...products])
  const [pagination, setPagination] = useState<number[]>([0, 5])
  const [pages, setPages] = useState<number[]>([])
  const [pageSelected, setPageSelected] = useState<number>(1)

  useEffect(() => {
    const pages = Math.ceil(productsFiltered.length / 5)
    const pagesArray = []

    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i)
    }

    setPages(pagesArray)
  }, [])

  useEffect(() => {
    if (search === '') {
      setProductsFiltered([...products])
      return
    }

    setProductsFiltered(products.filter((product: values) => Object.values(product).join(' ').toLowerCase().includes(search.toLowerCase())))
  }, [search])

  useEffect(() => {
    setPagination([(pageSelected * 5) - 5, pageSelected * 5])
  }, [pageSelected])

  return (
    <section className='dashboard-section'>
      <article className='dashboard-container'>
        <SearchOrAggregate search={search} setSearch={setSearch} />
        <TableProducts products={productsFiltered.slice(pagination[0], pagination[1])} />
      </article>
    </section>
  )
}

export default DashboardProducts
