interface values {
  id: string
  name: string
  description: string
  logo_url: string
  data_release: string
  data_revision: string
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
  logo_url: string
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
    logo_url: string
    data_release: string
    data_revision: string
  }
  errors: {
    id?: string
    name?: string
    description?: string
    logo_url?: string
    data_release?: string
    data_revision?: string
  }
  touched: {
    id: string
    name: string
    description: string
    logo_url: string
    data_release: string
    data_revision: string
  }

}

export type actionType = { type: 'SET_ID', payload: string }
| { type: 'SET_NAME', payload: string }
| { type: 'SET_DESCRIPTION', payload: string }
| { type: 'SET_LOGO_URL', payload: string }
| { type: 'SET_DATA_RELEASE', payload: string }
| { type: 'SET_DATA_REVISION', payload: string }
| { type: 'SET_VALUES', payload: values }
