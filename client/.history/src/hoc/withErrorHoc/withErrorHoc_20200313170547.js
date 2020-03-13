import React, { useState, useEffect, Fragment } from "react"

const WithErrorHoc = (WrappedComponent, axiosObj) => {
    const Test = (props) => {
        const [reqError, setError] = useState(null)
        // console.log(axiosObj.interceptors)
        const reqAxios = axiosObj.interceptors.request.use((config) => {
            setError(null)
            return config
        },
            (error) => {
                setError(error.message)
                return Promise.reject(error)
            })

        const resAxios = axiosObj.interceptors.response.use((res) => res, (error) => {
            alert()
            setError(error.message)
            return Promise.reject(error)
        })

        useEffect(() => {
            return () =>{
                axiosObj.interceptors.request.eject(reqAxios)
            axiosObj.interceptors.response.eject(resAxios)
            }
            
        }, [reqAxios, resAxios])


        return (
            <Fragment>
                {reqError ? <p>{reqError}</p> : null} 
                <WrappedComponent {...props} />
            </Fragment>
        )

    }
    return Test
}

export default WithErrorHoc