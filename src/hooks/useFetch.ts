'use client'

import { fetchParams, requestParams, response } from '@/types'
import { useState, useEffect } from 'react'

const useFetch = (): fetchParams => {
  const [options, setOptions] = useState<requestParams | null>(null)
  const [response, setResponse] = useState<response[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      if (options !== null) {
        const { url, method = 'GET', headers = { authorId: '123' }, body = {} } = options

        try {
          const res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body)
          })

          const json = await res.json()
          setResponse(json)
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
    error
  }
}

export default useFetch
