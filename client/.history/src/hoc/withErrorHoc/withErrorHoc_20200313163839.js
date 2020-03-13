import { useState } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    return () => {
        const [error, setError] = useState(null)

        axiosObj.interceptors.request.use((config) => {
            return config
        },
            (error) => {
                return Promise.reject(error)
            })

    }
}