import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxios = (dataUrl: string) => {
  const [data, setData] = useState()
  const [error, setError] = useState<Object | null>()
  const [isLoading, setIsLoading] = useState<boolean>()

  useEffect(() => {
    let isMounted = true
    const source = axios.CancelToken.source()

    const fetchData = async (url) => {
      setIsLoading(true)

      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        })
        if (isMounted) {
          setData(response.data)
          setError(null)
        }
        setIsLoading(false)
      } catch (error) {
        if (isMounted) {
          setError(error as Error)
          setIsLoading(false)
        }
      }
    }

    fetchData(dataUrl)

    return () => {
      console.log('cleaning up')
      isMounted = false
      source.cancel()
    }
  }, [dataUrl])

  return { data, error, isLoading }
}
