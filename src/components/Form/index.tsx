/* eslint-disable @typescript-eslint/naming-convention */
'use client'

import './styles.css'
import { propsForm, touchedStates } from '@/types'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { useState, useEffect } from 'react'
import InputText from '../InputText'
import { FORM_PRODUCT_ACTIONS, actionsType } from '@/actions/form_product_actions'
import InputDate from '../InputDate'

const Form = ({ state, dispatch, handleSubmit, textBtn, initialData }: propsForm): JSX.Element => {
  const { values, errors, touched } = state
  const { id, name, description, logo, date_release, date_revision } = values
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (initialData !== undefined) {
      dispatch({ type: FORM_PRODUCT_ACTIONS.SET_VALUES as actionsType, payload: initialData })
    }
  }, [initialData])

  useEffect(() => {
    console.log(values, errors, touched)
    if (Object.keys(errors).length === 0 && Object.values(touched).every(el => el === TOUCHED_STATES.TOUCHED_OK)) {
      setIsDisabled(false)
    }
  }, [id, name, description, logo, date_release, date_revision])

  return (
    <form
      onSubmit={handleSubmit}
      className='form-register-edit'
    >
      <InputText
        span='Id:'
        name='id'
        value={id}
        handleChange={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_ID as actionsType, payload: e.target.value })}
        handleBlur={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_ID as actionsType, payload: e.target.value })}
        error={errors.id}
        touched={touched.id as touchedStates}
        disabled={initialData?.id !== undefined}
      />
      <InputText
        span='Nombre:'
        name='name'
        value={name}
        handleChange={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_NAME as actionsType, payload: e.target.value })}
        handleBlur={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_NAME as actionsType, payload: e.target.value })}
        error={errors.name}
        touched={touched.name as touchedStates}
        disabled={false}
      />
      <InputText
        span='Descripción:'
        name='description'
        value={description}
        handleChange={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DESCRIPTION as actionsType, payload: e.target.value })}
        handleBlur={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DESCRIPTION as actionsType, payload: e.target.value })}
        error={errors.description}
        touched={touched.description as touchedStates}
        disabled={false}
      />
      <InputText
        span='Logo:'
        name='logo'
        value={logo}
        handleChange={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_LOGO as actionsType, payload: e.target.value })}
        handleBlur={(e) => dispatch({ type: FORM_PRODUCT_ACTIONS.SET_LOGO as actionsType, payload: e.target.value })}
        error={errors.logo}
        touched={touched.logo as touchedStates}
        disabled={false}
      />
      <InputDate
        span='Fecha liberación:'
        name='date_release'
        value={date_release}
        handleChange={(e) => {
          dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DATE_RELEASE as actionsType, payload: e.target.value })
          dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DATE_REVISION as actionsType, payload: e.target.value })
        }}
        handleBlur={(e) => {
          dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DATE_RELEASE as actionsType, payload: e.target.value })
          dispatch({ type: FORM_PRODUCT_ACTIONS.SET_DATE_REVISION as actionsType, payload: e.target.value })
        }}
        error={errors.date_release}
        touched={touched.date_release as touchedStates}
        disabled={false}
      />
      <InputDate
        span='Fecha revisión:'
        name='date_revision'
        value={date_revision}
        handleChange={(e) => {}}
        handleBlur={(e) => {}}
        error={errors.date_revision}
        touched={touched.date_revision as touchedStates}
        disabled
      />
      <input type='submit' value={textBtn} disabled={isDisabled} />
    </form>
  )
}

export default Form
