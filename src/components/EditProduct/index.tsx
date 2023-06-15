'use client'

import './styles.css'
import { formProductReducer, initialStateData } from '@/reducers/form_product_reducer'
import { useReducer, useEffect, useState } from 'react'
import { values } from '@/types'
import { useRouter } from 'next/navigation'
import Form from '../Form'
import MessageSuccess from '../MessageSuccess'
import useFetch from '@/hooks/useFetch'

const EditProduct = ({ data }: { data: values }): JSX.Element => {
  const fetcher = useFetch()
  const router = useRouter()
  const [state, dispatch] = useReducer(formProductReducer, initialStateData)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  useEffect(() => {
    router.refresh()
  }, [])

  useEffect(() => {
    const status = fetcher.status

    if (status === 0 || status === null) return

    if (status >= 200 && status < 300) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
        router.push('/', { shallow: true })
      }, 3000)
    }
  }, [fetcher.status])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    fetcher.request({
      url: 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
      method: 'PUT',
      body: JSON.stringify(state.values),
      headers: {
        Accept: '*/*',
        authorId: '123',
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <section className='section-edit'>
      <div className='container-edit'>
        <h2>Formulario de edición</h2>
        <Form state={state} dispatch={dispatch} handleSubmit={handleSubmit} textBtn='Editar producto' initialData={data} />
        {
          showMessage && (
            <MessageSuccess message={fetcher.status === 200 ? 'Producto editado correctamente' : 'Error al editar el producto'} isSuccess={fetcher.status === 200} />
          )
        }
      </div>

    </section>
  )
}

export default EditProduct
