import axios from 'axios'
import { useEffect, useState } from 'react'

export default url => {
    const baseURL = 'https://conduit.productionready.io/api/'

    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }

    useEffect(() => {
        if (!isLoading) {
            return
        }
        axios(baseURL + url, options)
            .then(response => {
                setResponse(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.response.data)
                setIsLoading(false)
            })
    }, [isLoading])

    return [{ isLoading, response, error }, doFetch]
}