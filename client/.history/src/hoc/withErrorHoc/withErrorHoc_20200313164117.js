import { useState } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    return () => {
        const [error, setError] = useState(null)

        axiosObj.interceptors.request.use((config) => {
            setError(null)
            return config
        },
            (error) => {
                setError(req.message)
            return Promise.reject(error)
            })

        axiosObj.interceptors.response.use(res, (req)=>{
            setError(req.message)
            return Promise.reject(error)
        })
    }
}