'use client'

import { values } from '@/types'
import Image from 'next/image'

const TableRowProducts = ({ product }: { product: values }): JSX.Element => {
  const { name, description, logo, date_release, date_revision } = product

  return (<>Hola soy los contenidos de la tabla</>)
}

export default TableRowProducts
