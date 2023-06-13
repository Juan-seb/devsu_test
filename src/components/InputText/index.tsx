'use client'

import { TOUCHED_STATES, touched_states } from '@/helpers/touched_states'

const InputText = ({ span, name, value, handleChange, handleBlur, error, touched, disabled }: {
  span: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error: string
  touched: touched_states
  disabled: boolean
}): JSX.Element => {
  return (
    <section className='w-full mt-4'>
      <label>
        <span className='font-semibold'>
          {span}
        </span>
        <input
          type='text'
          name={name}
          value={value}
          className='w-full px-1 py-1 mt-1 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      {
        (error !== '' || touched === TOUCHED_STATES.TOUCHED_ERROR) && <p className='text-red-400 text-sm mt-1'>{error} ❌</p>
      }
    </section>
  )
}

export default InputText
