import { Dispatch } from 'react'
import { actionsType } from './actions/form_product_actions'

export type touchedStates = 'TOUCHED_OK' | 'TOUCHED_ERROR' | 'NOT_TOUCHED'

export type actionType = { type: actionsType, payload: string }
| { type: actionsType, payload: string }
| { type: actionsType, payload: string }
| { type: actionsType, payload: string }
| { type: actionsType, payload: string }
| { type: actionsType, payload: string }
| { type: actionsType, payload: values }

interface touchStates {
  TOUCHED_OK: string
  TOUCHED_ERROR: string
  NOT_TOUCHED: string
}

interface values {
  id: string
  name: string
  description: string
  logo: string
  date_release: string
  date_revision: string
}

export interface requestParams {
  url: string
  method: string
  headers: {
    'Content-Type': string
    authorId: string
  }
  body: {
    [key: string]: string
  } | {}
}

export interface response {
  id: string
  name: string
  description: string
  logo: string
  data_release: string
  data_revision: string
}

export interface fetchParams {
  request: (options: request_params) => void
  response: response[] | null
  error: string | null
}

export interface initialStateReducer {
  values: {
    id: string
    name: string
    description: string
    logo: string
    date_release: string
    date_revision: string
  }
  errors: {
    id?: string
    name?: string
    description?: string
    logo?: string
    date_release?: string
    date_revision?: string
  }
  touched: {
    id: string
    name: string
    description: string
    logo: string
    date_release: string
    date_revision: string
  }

}

export interface propsForm {
  state: initialStateReducer
  dispatch: Dispatch<actionType>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  textBtn: string
  initialData?: values
}

export interface propsInput {
  span: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error: string | undefined
  touched: touchedStates
  disabled: boolean
}
