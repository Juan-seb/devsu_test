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
      // Set the ID value from the action payload
      const value: string = action.payload as string

      // Validate the ID and get the error message
      const error: string | null = validateId(value)

      // If there is no error and the ID error previously existed, remove it from the state
      if ((error === null) && state.errors.id !== undefined) {
        delete state.errors.id
      }

      // Return the updated state based on the presence of an error
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
      // Set the ID value and error properties from the action payload
      const properties: actionErrorId = action.payload as actionErrorId

      // If the ID doesn't exist and the ID error previously existed, remove it from the state
      if ((!properties.exists) && state.errors.id !== undefined) {
        delete state.errors.id
      }

      // Return the updated state based on the existence of the ID
      return properties.exists
        ? {
            values: { ...state.values, id: properties.value },
            errors: { ...state.errors, id: 'The ID already exists' },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_ERROR }
          }
        : {
            values: { ...state.values, id: properties.value },
            errors: { ...state.errors },
            touched: { ...state.touched, id: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (FORM_PRODUCT_ACTIONS.SET_NAME): {
      // Set the name value from the action payload
      const value: string = action.payload as string

      // Validate the name and get the error message
      const error: string | null = validateName(value)

      // If there is no error and the name error previously existed, remove it from the state
      if ((error === null) && state.errors.name !== undefined) {
        delete state.errors.name
      }

      // Return the updated state based on the presence of an error
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
      // Set the description value from the action payload
      const value: string = action.payload as string

      // Validate the description and get the error message
      const error: string | null = validateDescription(value)
      console.log(error)

      // If there is no error and the description error previously existed, remove it from the state
      if ((error === null) && state.errors.description !== undefined) {
        delete state.errors.description
      }

      // Return the updated state based on the presence of an error
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
      // Set the logo value from the action payload
      const value: string = action.payload as string

      // Validate the logo URL and get the error message
      const error: string | null = validateLogoUrl(value)

      // If there is no error and the logo error previously existed, remove it from the state
      if ((error === null) && state.errors.logo !== undefined) {
        delete state.errors.logo
      }

      // Return the updated state based on the presence of an error
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
      // Set the date_release value from the action payload
      const value: string = action.payload as string

      // Validate the release date and get the error message
      const error: string | null = validateDateRelease(value)

      // If there is no error and the date_release error previously existed, remove it from the state
      if ((error === null) && state.errors.date_release !== undefined) {
        delete state.errors.date_release
      }

      // Return the updated state based on the presence of an error
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
      // Set the date_revision value from the action payload
      console.log(action.payload)
      const value: string = action.payload as string
      const [year, month, day] = value.split('-')

      // Return the updated state with the next year as the date_revision value
      return {
        values: { ...state.values, date_revision: `${parseInt(year) + 1}-${month}-${day}` },
        errors: { ...state.errors },
        touched: { ...state.touched, date_revision: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (FORM_PRODUCT_ACTIONS.SET_VALUES): {
      // Set all the values from the action payload
      const values: values = action.payload as values

      // Extract the date parts from date_release and date_revision
      const dateRelease = values.date_release.slice(0, 10)
      const dateRevision = values.date_revision.slice(0, 10)

      // Return the updated state with the new values and touched states
      return {
        values: {
          ...values,
          date_release: dateRelease,
          date_revision: dateRevision
        },
        errors: { ...state.errors },
        touched: {
          ...state.touched,
          id: TOUCHED_STATES.TOUCHED_OK,
          logo: TOUCHED_STATES.TOUCHED_OK,
          date_release: TOUCHED_STATES.TOUCHED_OK,
          date_revision: TOUCHED_STATES.TOUCHED_OK,
          name: TOUCHED_STATES.TOUCHED_OK,
          description: TOUCHED_STATES.TOUCHED_OK
        }
      }
    }
    case (FORM_PRODUCT_ACTIONS.SET_RESET): {
      // Reset the state to the initial state
      return initialStateData
    }
    default:
      return state
  }
}

export { initialStateData, formProductReducer }
