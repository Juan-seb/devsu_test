'use client'

import { fetchParams, requestParams, response } from '@/types'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (): fetchParams => {
  const [options, setOptions] = useState<requestParams | null>(null)
  const [response, setResponse] = useState<response[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      if (options !== null) {
        const { url, method = 'GET', headers: headersList = { authorId: '123' }, body = {} } = options
        try {
          const res = await axios({
            method,
            url,
            headers: headersList,
            data: body
          })

          setResponse(res.data)
          setStatus(res.status)
        } catch (error: any) {
          setError(error)
        }
      }
    }
    fetchData().catch((error: any) => setError(error))
  }, [options])

  return {
    // Request is a function that receives an object with the following structure: { url: string, method: string, headers: { 'Content-Type': string, authorId: string }, body: { [key: string]: string } | {} }
    request: (options: requestParams) => setOptions(options),
    response,
    error,
    status
  }
}

export default useFetch
