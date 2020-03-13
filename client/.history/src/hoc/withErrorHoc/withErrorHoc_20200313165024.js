import React, { useState, useEffect, Fragment } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    return const test = (props) => {
        const [error, setError] = useState(null)
        useEffect(() => {
            axiosObj.interceptors.request.reject(reqAxios)
            axiosObj.interceptors.response.reject(resAxios)
        }, [])
        const reqAxios = axiosObj.interceptors.request.use((config) => {
            setError(null)
            return config
        },
            (error) => {
                setError(error.message)
                return Promise.reject(error)
            })

        const resAxios = axiosObj.interceptors.response.use(res, (req) => {
            setError(req.message)
            return Promise.reject(error)
        })

        return (
            <Fragment>
                <p>{error}</p>
                <WrappedComponent {...props} />
            </Fragment>
        )

    }
}

export default WithErrorHoc