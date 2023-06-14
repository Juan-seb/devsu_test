'use client'

import './styles.css'
import { propsOptionsProduct } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import dots from '@/../public/more.png'
import Image from 'next/image'
import useFetch from '@/hooks/useFetch'

const OptionsProduct = ({ id, products, productsToShow, setProductsFiltered }: propsOptionsProduct): JSX.Element => {
  const router = useRouter()
  const fetcher = useFetch()
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const handleClickEdit = (): void => {
    router.push(`/record/${id}`)
  }

  const handleClickDelete = (): void => {
    const indexProduct = products.findIndex((product) => product.id === id)
    products.splice(indexProduct, 1)
    console.log(id)
    fetcher.request({
      url: `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`,
      method: 'DELETE'
    })
    console.log('hola2')
    setProductsFiltered([...products])
  }

  return (
    <section className='options-container'>
      <div className='options-image' onClick={() => setShowOptions(!showOptions)}>
        <Image
          src={dots}
          alt='...'
          width={18}
          height={18}
        />
      </div>
      <div className={`options-menu ${showOptions ? 'options-visible' : ''}`}>
        <p className='options' onClick={handleClickEdit}>✏️ Editar</p>
        <p className='options' onClick={handleClickDelete}>🗑️ Eliminar</p>
      </div>
    </section>
  )
}

export default OptionsProduct
