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

const validateId = (id: string): string | null => {
  let error: null | string = null
  if (id.length === 0 || id.length < 3 || id.length > 8) {
    error = 'ID no valido, minimo 3 caracteres, maximo 10!'
    return error
  }

  if (id.length >= 3 && id.length <= 8) {
    fetchValidateId(id).then(res => {
      if (!res) {
        error = 'ID no valido!'
        return error
      }
    }).catch(error => {
      error = 'ID no valido!'
      return error
    })
  }

  return error
}

const validateName = (name: string): string | null => {
  let error: null | string = null
  const regex = /^[a-zA-Z ,.'-]+$/i

  if (name.length === 0 || name.length < 5 || name.length > 100 || !regex.test(name)) {
    error = 'Nombre no valido, minimo 5 caracteres, maximo 100!'
  }

  return error
}

const validateDescription = (description: string): string | null => {
  let error: null | string = null

  if (description.length === 0 || description.length < 10 || description.length > 200) {
    error = 'Descripción no valida, minimo 10 caracteres, maximo 200!'
  }

  return error
}

const validateLogoUrl = (logo: string): string | null => {
  let error: null | string = null

  if (logo.length === 0) {
    error = 'Ingrese una url!'
  }

  return error
}

const validateDateRelease = (date_release: string): string | null => {
  let error: null | string = null

  const [year, month, day] = date_release.split('-')
  const dateInput = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  const date = new Date()
  const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

  if (dateInput < currentDate) {
    error = 'Fecha no valida, el año no puede ser menor al actual!'
    return error
  }

  return error
}

export {
  validateId,
  validateName,
  validateDescription,
  validateLogoUrl,
  validateDateRelease
}
