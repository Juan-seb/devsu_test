import { FORM_PRODUCT_ACTIONS } from '@/actions/form_product_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { validateId } from '@/helpers/form_product_validations'
import { initialStateReducer, actionType } from '@/types'

const initialStateData: initialStateReducer = {
  values: {
    id: '',
    name: '',
    description: '',
    logo_url: '',
    data_release: '',
    data_revision: ''
  },
  errors: {},
  touched: {
    id: TOUCHED_STATES.NOT_TOUCHED,
    name: TOUCHED_STATES.NOT_TOUCHED,
    description: TOUCHED_STATES.NOT_TOUCHED,
    logo_url: TOUCHED_STATES.NOT_TOUCHED,
    data_release: TOUCHED_STATES.NOT_TOUCHED,
    data_revision: TOUCHED_STATES.NOT_TOUCHED
  }
}

function formProductReducer (state: initialStateReducer, action: actionType): initialStateReducer {
  switch (action.type) {
    case (FORM_PRODUCT_ACTIONS.SET_ID):{
      const value: string = action.payload as string

      const error: string | null = validateId(value)

      if ((error === null) && state.errors.id !== undefined) {
        delete state.errors.id
      }

      return error !== null
        ? {
            values: { ...state.values, id: value },
            errors: { ...state.errors, id: error },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, id: value },
            errors: { ...state.errors },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    default:
      return state
  }
}

export { initialStateData, formProductReducer }
