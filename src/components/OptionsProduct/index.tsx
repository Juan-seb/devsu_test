/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import './styles.css'
import { propsOptionsProduct } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import dots from '@/../public/more.png'
import Image from 'next/image'
import axios from 'axios'

const OptionsProduct = ({ id, products, productsToShow, setProductsFiltered }: propsOptionsProduct): JSX.Element => {
  const router = useRouter()
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const handleClickEdit = (): void => {
    router.push(`/record/${id}`)
  }

  const handleClickDelete = async (): Promise<any> => {
    const indexProduct = products.findIndex((product) => product.id === id)
    products.splice(indexProduct, 1)

    try {
      await axios({
        method: 'DELETE',
        url: `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`,
        headers: {
          authorId: '123'
        }
      })

      setProductsFiltered([...products])
    } catch (error: any) {
      console.log(error)
    }
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
