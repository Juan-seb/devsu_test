/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/naming-convention */
'use client'

import './styles.css'
import { propsForm, touchedStates } from '@/types'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { useState, useEffect } from 'react'
import InputText from '../InputText'
import { FORM_PRODUCT_ACTIONS, actionsType } from '@/actions/form_product_actions'
import InputDate from '../InputDate'
import { fetchValidateId } from '@/helpers/form_product_validations'

const Form = ({ state, dispatch, handleSubmit, textBtn, initialData }: propsForm): JSX.Element => {
  const { values, errors, touched } = state
  const { id, name, description, logo, date_release, date_revision } = values
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  // Set initial form values if provided
  useEffect(() => {
    if (initialData !== undefined) {
      dispatch({ type: FORM_PRODUCT_ACTIONS.SET_VALUES as actionsType, payload: initialData })
    }
  }, [initialData])

  // Enable/disable form submission based on form validations
  useEffect(() => {
    if (Object.keys(errors).length === 0 && Object.values(touched).every(el => el === TOUCHED_STATES.TOUCHED_OK)) {
      setIsDisabled(false)
    }
  }, [id, name, description, logo, date_release, date_revision])

  // Handle changes in the ID input field
  const handleId = async (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): Promise<void> => {
    dispatch({ type: FORM_PRODUCT_ACTIONS.SET_ID as actionsType, payload: e.target.value })

    if (e.target.value.length < 3) return
    // Verify if the ID already exists
    try {
      const exists: boolean = await fetchValidateId(e.target.value)

      // If the ID already exists, set the error
      if (exists) {
        dispatch({ type: FORM_PRODUCT_ACTIONS.SET_ERROR_ID as actionsType, payload: { value: e.target.value, exists } })
      }
    } catch (err: any) {
      console.log(err)
    }
  }

  // Reset the form values
  const handleReset = (): void => {
    dispatch({ type: FORM_PRODUCT_ACTIONS.SET_RESET as actionsType })
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className='form-register-edit'
    >
      <InputText
        span='Id:'
        name='id'
        value={id}
        handleChange={handleId}
        handleBlur={handleId}
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
      <div className='options-container'>
        <input type='reset' value='Reiniciar' disabled={textBtn === 'Editar producto'} className={`options-reset ${textBtn === 'Editar producto' ? 'opacity-60' : ''}`} />
        <input type='submit' value={textBtn} disabled={isDisabled} className={`options-submit ${isDisabled ? 'opacity-60' : ''}`} title='Debe modificar por lo menos el nombre y la descripción' />
      </div>
    </form>
  )
}

export default Form
