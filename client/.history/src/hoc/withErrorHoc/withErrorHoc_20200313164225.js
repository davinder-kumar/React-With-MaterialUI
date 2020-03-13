import { useState, useEffect } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    return () => {
        const [error, setError] = useState(null)
        useEffect
        axiosObj.interceptors.request.use((config) => {
            setError(null)
            return config
        },
            (error) => {
                setError(error.message)
                return Promise.reject(error)
            })

        axiosObj.interceptors.response.use(res, (req) => {
            setError(req.message)
            return Promise.reject(error)
        })
    }
}