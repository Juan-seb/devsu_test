'use client'

import { TOUCHED_STATES } from '@/helpers/touched_states'
import './styles.css'
import { propsInput } from '@/types'

const InputText = ({ span, name, value, handleChange, handleBlur, error, touched, disabled }: propsInput): JSX.Element => {
  return (
    <section className='section-input'>
      <label>
        <span className='span-title-input'>
          {span}
        </span>
        <input
          type='text'
          name={name}
          value={value}
          className='input-text'
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </label>
      {
        (error !== undefined || touched === TOUCHED_STATES.TOUCHED_ERROR) && <p className='error-message'>{error} ❌</p>
      }
    </section>
  )
}

export default InputText
