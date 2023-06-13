'use client'

import './styles.css'
import { formProductReducer, initialStateData } from '@/reducers/form_product_reducer'
import { useReducer } from 'react'
import useFetch from '@/hooks/useFetch'
import Form from '../Form'

const RegisterProduct = (): JSX.Element => {
/*   const fetcher = useFetch() */
  const [state, dispatch] = useReducer(formProductReducer, initialStateData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <section className='section-register-edit'>
      <h3>Formulario de registro</h3>
      <Form state={state} dispatch={dispatch} handleSubmit={handleSubmit} textBtn='Enviar' />
    </section>
  )
}

export default RegisterProduct
