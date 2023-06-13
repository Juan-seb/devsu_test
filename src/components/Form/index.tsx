/* eslint-disable @typescript-eslint/naming-convention */
'use client'

import { actionType, initialStateReducer, values } from '@/types'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { useState, useEffect, Dispatch } from 'react'
import InputText from '../InputText'

const Form = ({ state, dispatch, handleSubmit, textBtn, initialData }: {
  state: initialStateReducer
  dispatch: Dispatch<actionType>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  textBtn: string
  initialData?: values
}): JSX.Element => {
  const { values, errors, touched } = state
  const { id, name, description, logo_url, data_release, data_revision } = values
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (initialData !== undefined) {
      dispatch({ type: 'SET_VALUES', payload: initialData })
    }
  }, [initialData])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && Object.values(touched).every(el => el === TOUCHED_STATES.TOUCHED_OK)) {
      setIsDisabled(false)
    }
  }, [id, name, description, logo_url, data_release, data_revision])

  return (
    <form onSubmit={handleSubmit}>
      Formulario
      <input type='submit' value={textBtn} form='{}' disabled={isDisabled} />
    </form>
  )
}

export default Form
