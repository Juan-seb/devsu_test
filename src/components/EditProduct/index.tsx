'use client'

import './styles.css'
import { formProductReducer, initialStateData } from '@/reducers/form_product_reducer'
import { useReducer } from 'react'
import useFetch from '@/hooks/useFetch'
import Form from '../Form'
import { values } from '@/types'

const EditProduct = ({ data }: { data: values }): JSX.Element => {
  const fetcher = useFetch()
  const [state, dispatch] = useReducer(formProductReducer, initialStateData)

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
      </div>
    </section>
  )
}

export default EditProduct
