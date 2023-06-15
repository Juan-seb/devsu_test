'use client'

import './styles.css'
import { formProductReducer, initialStateData } from '@/reducers/form_product_reducer'
import { useReducer } from 'react'
import useFetch from '@/hooks/useFetch'
import Form from '../Form'
import { FORM_PRODUCT_ACTIONS, actionsType } from '@/actions/form_product_actions'

const RegisterProduct = (): JSX.Element => {
  const fetcher = useFetch()
  const [state, dispatch] = useReducer(formProductReducer, initialStateData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    fetcher.request({
      url: 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
      method: 'POST',
      body: JSON.stringify(state.values),
      headers: {
        Accept: '*/*',
        authorId: '123',
        'Content-Type': 'application/json'
      }
    })

    dispatch({ type: FORM_PRODUCT_ACTIONS.SET_RESET as actionsType })
  }

  return (
    <section className='section-register-edit'>
      <div className='container-register'>
        <h2>Formulario de registro</h2>
        <Form state={state} dispatch={dispatch} handleSubmit={handleSubmit} textBtn='Enviar' />
      </div>
    </section>
  )
}

export default RegisterProduct
