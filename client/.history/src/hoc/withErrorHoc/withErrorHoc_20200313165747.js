import React, { useState, useEffect, Fragment } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    const Test = (props) => {
        const [error, setError] = useState(null)
        
        const reqAxios = axiosObj.interceptors.request.use((config) => {
            setError(null)
            return config
        },
            (error) => {
                setError(error.message)
                return Promise.reject(error)
            })

        const resAxios = axiosObj.interceptors.response.use((res) => res, (req) => {
            setError(req.message)
            return Promise.reject(error)
        })
        
        useEffect(() => {
            axiosObj.interceptors.request.reject(reqAxios)
            axiosObj.interceptors.response.reject(resAxios)
        }, [reqAxios, resAxios])
        

        return (
            <Fragment>
                <p>{error}</p>
                <WrappedComponent {...props} />
            </Fragment>
        )

    }
    return Test
}

export default WithErrorHoc