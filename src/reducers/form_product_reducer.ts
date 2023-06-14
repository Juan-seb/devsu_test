import { FORM_PRODUCT_ACTIONS } from '@/actions/form_product_actions'
import { initialStateReducer, actionType, values, actionErrorId } from '@/types'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { validateId, validateName, validateDescription, validateLogoUrl, validateDateRelease } from '@/helpers/form_product_validations'

const initialStateData: initialStateReducer = {
  values: {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  },
  errors: {},
  touched: {
    id: TOUCHED_STATES.NOT_TOUCHED,
    name: TOUCHED_STATES.NOT_TOUCHED,
    description: TOUCHED_STATES.NOT_TOUCHED,
    logo: TOUCHED_STATES.NOT_TOUCHED,
    date_release: TOUCHED_STATES.NOT_TOUCHED,
    date_revision: TOUCHED_STATES.NOT_TOUCHED
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
    case (FORM_PRODUCT_ACTIONS.SET_ERROR_ID):{
      const properties: actionErrorId = action.payload as actionErrorId

      if ((!properties.exists) && state.errors.id !== undefined) {
        delete state.errors.id
      }

      return properties.exists
        ? {
            values: { ...state.values, id: properties.value },
            errors: { ...state.errors, id: 'El ID ya existe' },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, id: properties.value },
            errors: { ...state.errors },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_NAME): {
      const value: string = action.payload as string

      const error: string | null = validateName(value)

      if ((error === null) && state.errors.name !== undefined) {
        delete state.errors.name
      }

      return error !== null
        ? {
            values: { ...state.values, name: value },
            errors: { ...state.errors, name: error },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, name: value },
            errors: { ...state.errors },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_DESCRIPTION): {
      const value: string = action.payload as string

      const error: string | null = validateDescription(value)
      console.log(error)
      if ((error === null) && state.errors.description !== undefined) {
        delete state.errors.description
      }

      return error !== null
        ? {
            values: { ...state.values, description: value },
            errors: { ...state.errors, description: error },
            touched: { ...state.touched, description: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, description: value },
            errors: { ...state.errors },
            touched: { ...state.touched, description: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_LOGO): {
      const value: string = action.payload as string

      const error: string | null = validateLogoUrl(value)

      if ((error === null) && state.errors.logo !== undefined) {
        delete state.errors.logo
      }

      return error !== null
        ? {
            values: { ...state.values, logo: value },
            errors: { ...state.errors, logo: error },
            touched: { ...state.touched, logo: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, logo: value },
            errors: { ...state.errors },
            touched: { ...state.touched, logo: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_DATE_RELEASE): {
      const value: string = action.payload as string

      const error: string | null = validateDateRelease(value)

      if ((error === null) && state.errors.date_release !== undefined) {
        delete state.errors.date_release
      }

      return error !== null
        ? {
            values: { ...state.values, date_release: value },
            errors: { ...state.errors, date_release: error },
            touched: { ...state.touched, date_release: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, date_release: value },
            errors: { ...state.errors },
            touched: { ...state.touched, date_release: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_DATE_REVISION): {
      console.log(action.payload)
      const value: string = action.payload as string
      const [year, month, day] = value.split('-')

      return {
        values: { ...state.values, date_revision: `${parseInt(year) + 1}-${month}-${day}` },
        errors: { ...state.errors },
        touched: { ...state.touched, date_revision: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (FORM_PRODUCT_ACTIONS.SET_VALUES): {
      const values: values = action.payload as values
      const dateRelease = values.date_release.slice(0, 10)
      const dateRevision = values.date_revision.slice(0, 10)

      return {
        values: {
          ...values,
          date_release: dateRelease,
          date_revision: dateRevision
        },
        errors: { ...state.errors },
        touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_OK, logo: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    default:
      return state
  }
}

export { initialStateData, formProductReducer }
