'use client'

import './styles.css'
import { formProductReducer, initialStateData } from '@/reducers/form_product_reducer'
import { useReducer, useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import Form from '../Form'
import { FORM_PRODUCT_ACTIONS, actionsType } from '@/actions/form_product_actions'
import MessageSuccess from '../MessageSuccess'

const RegisterProduct = (): JSX.Element => {
  const fetcher = useFetch()
  const [state, dispatch] = useReducer(formProductReducer, initialStateData)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  useEffect(() => {
    const status = fetcher.status

    if (status === 0 || status === null) return

    if (status >= 200 && status < 300) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
    }
  }, [fetcher.status])

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
        {
          showMessage && (
            <MessageSuccess message={fetcher.status === 200 ? 'Producto registrado correctamente' : 'Error al registrar el producto'} isSuccess={fetcher.status === 200} />
          )
        }
      </div>
    </section>
  )
}

export default RegisterProduct
