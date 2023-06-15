'use client'

import './styles.css'
import { propsTable, values } from '@/types'
import CountPagination from '../CountPagination'
import TableRowProducts from '../TableRowProducts'
import { useState, useEffect } from 'react'
import MessageSuccess from '../MessageSuccess'

const TableProducts = ({ products, productsToShow, setProductsFiltered, results, pages, setPageSelected }: propsTable): JSX.Element => {
  const [pageStatus, setPageStatus] = useState<number>(0)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  useEffect(() => {
    if (pageStatus === 0) return

    if (pageStatus >= 200 && pageStatus < 300) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
    }
  }, [pageStatus])

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
            <TableRowProducts
              key={product.id}
              product={product}
              products={products}
              productsToShow={productsToShow}
              setProductsFiltered={setProductsFiltered}
              setPageStatus={setPageStatus}
            />
          ))
        }
        </section>
      </div>
      <CountPagination results={results} pages={pages} setPageSelected={setPageSelected} />
      {
        showMessage && (
          <MessageSuccess message={pageStatus === 200 ? 'Producto eliminado correctamente' : 'Error al eliminar el producto'} isSuccess={pageStatus === 200} />
        )
      }
    </div>
  )
}

export default TableProducts
