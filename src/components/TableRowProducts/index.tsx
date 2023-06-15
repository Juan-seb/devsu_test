/* eslint-disable @typescript-eslint/naming-convention */
'use client'

import { propsTableRow } from '@/types'
import Image from 'next/image'
import './styles.css'
import { useState } from 'react'
import OptionsProduct from '../OptionsProduct'

const TableRowProducts = ({ product, products, productsToShow, setProductsFiltered, setPageStatus }: propsTableRow): JSX.Element => {
  const { name, description, logo, date_release, date_revision } = product
  const [dateRelease] = useState<string[]>(date_release.slice(0, 10).split('-'))
  const [dateRevision] = useState<string[]>(date_revision.slice(0, 10).split('-'))

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '100%',
    backgroundPosition: 'center'
  }

  return (
    <div className='table-product'>
      <div className='table-cell-product-logo'>
        <div className='image-container'>
          <Image
            src={logo}
            width={45}
            height={45}
            alt='Logo producto'
            style={imageStyle}
          />
        </div>
      </div>
      <div className='table-cell-product'>
        {name}
      </div>
      <div className='table-cell-product'>
        {description}
      </div>
      <div className='table-cell-product'>
        {`${dateRelease[2]}/${dateRelease[1]}/${dateRelease[0]}`}
      </div>
      <div className='table-cell-product'>
        {`${dateRevision[2]}/${dateRevision[1]}/${dateRevision[0]}`}
      </div>
      <div className='table-cell-product-options'>
        <OptionsProduct
          id={product.id}
          products={products}
          productsToShow={productsToShow}
          setProductsFiltered={setProductsFiltered}
          setPageStatus={setPageStatus}
        />
      </div>
    </div>
  )
}

export default TableRowProducts
