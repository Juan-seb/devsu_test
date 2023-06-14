'use client'

import { propsTable, values } from '@/types'
import './styles.css'
import TableRowProducts from '../TableRowProducts'
import CountPagination from '../CountPagination'

const TableProducts = ({ products, productsToShow, setProductsFiltered, results, pages, setPageSelected }: propsTable): JSX.Element => {
  return (
    <div className='table-container'>
      <div className='table-scroll'>
        <section className='table-products'>
          <div className='table-header'>
            <div className='table-cell-logo'>
              Logo
            </div>
            <div className='table-cell'>
              Nombre del producto
            </div>
            <div className='table-cell'>
              Descripción
            </div>
            <div className='table-cell'>
              Fecha de liberación
            </div>
            <div className='table-cell'>
              Fecha de revisión
            </div>
            <div className='table-cell-options'>...</div>
          </div>
          {
          productsToShow.map((product: values) => (
            <TableRowProducts key={product.id} product={product} products={products} productsToShow={productsToShow} setProductsFiltered={setProductsFiltered} />
          ))
        }
        </section>
      </div>
      <CountPagination results={results} pages={pages} setPageSelected={setPageSelected} />
    </div>
  )
}

export default TableProducts
