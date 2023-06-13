'use client'

import { propsInput } from '@/types'
import './styles.css'
import { TOUCHED_STATES } from '@/helpers/touched_states'

const InputDate = ({ span, name, value, handleChange, handleBlur, error, touched, disabled }: propsInput): JSX.Element => {
  return (
    <section className='section-input'>
      <label>
        <span className='span-title-input'>
          {span}
        </span>
        <input
          type='date'
          name={name}
          value={value}
          className='input-date'
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

export default InputDate
