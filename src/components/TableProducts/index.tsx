'use client'

import { values } from '@/types'
import './styles.css'
import TableRowProducts from '../TableRowProducts'

const TableProducts = ({ products }: { products: values[] }): JSX.Element => {
  return (
    <div className='table-container'>
      <section className='table-products'>
        <div className='table-header'>
          <div className='table-cell'>
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
          <div className='table-cell-options'>
            ...
          </div>
        </div>
        {
          products.map((product: values) => (
            <TableRowProducts key={product.id} product={product} />
          ))
        }
      </section>
    </div>
  )
}

export default TableProducts
