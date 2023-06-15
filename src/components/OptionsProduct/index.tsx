/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import './styles.css'
import { propsOptionsProduct } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import dots from '@/../public/more.png'
import Image from 'next/image'
import axios from 'axios'

const OptionsProduct = ({ id, products, productsToShow, setProductsFiltered, setPageStatus }: propsOptionsProduct): JSX.Element => {
  const router = useRouter()
  const [showOptions, setShowOptions] = useState<boolean>(false)

  // Handle click event for edit button to redirect to the edit page
  const handleClickEdit = (): void => {
    router.push(`/record/${id}`)
  }

  // Delete the product (request and array) and update the products list
  const handleClickDelete = async (): Promise<any> => {
    const indexProduct = products.findIndex((product) => product.id === id)
    products.splice(indexProduct, 1)

    try {
      const res = await axios({
        method: 'DELETE',
        url: `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`,
        headers: {
          authorId: '123'
        }
      })

      setProductsFiltered([...products])
      setPageStatus(res.status)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <section className='options-container-product'>
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
