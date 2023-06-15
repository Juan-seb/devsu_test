/* eslint-disable @typescript-eslint/naming-convention */
// This function validate if the id already exists in the database
const fetchValidateId = async (id: string): Promise<boolean> => {
  try {
    const res = await fetch(`https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=${id}`)
    const json: boolean = await res.json()

    return json
  } catch (error: any) {
    return false
  }
}

// Checks the length of the ID and returns an error message
const validateId = (id: string): string | null => {
  let error: null | string = null
  if (id.length === 0 || id.length < 3 || id.length > 8) {
    error = 'ID no valido, 3 - 10 caracteres!'
    return error
  }

  return error
}

// Checks the length of the name and returns an error message
const validateName = (name: string): string | null => {
  let error: null | string = null

  if (name.length === 0 || name.length < 5 || name.length > 100) {
    error = 'Nombre no valido, 5 - 100 caracteres!'
  }

  return error
}

// Checks the length of the validateDescription and returns an error message
const validateDescription = (description: string): string | null => {
  let error: null | string = null

  if (description.length === 0 || description.length < 10 || description.length > 200) {
    error = 'Descripción no valida, 10 - 200 caracteres!'
  }

  return error
}

// Checks the length of the ID and returns an error messsage
const validateLogoUrl = (logo: string): string | null => {
  let error: null | string = null

  if (logo.length === 0) {
    error = 'Ingrese una url!'
  }

  return error
}

// Checks if the date provided is valid
const validateDateRelease = (date_release: string): string | null => {
  let error: null | string = null

  const [year, month, day] = date_release.split('-')
  const dateInput = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  const date = new Date()
  const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

  if (dateInput < currentDate) {
    error = 'Fecha no valida!'
    return error
  }

  return error
}

export {
  fetchValidateId,
  validateId,
  validateName,
  validateDescription,
  validateLogoUrl,
  validateDateRelease
}
