import React from 'react'
import Header from '../../components/UI/Header/Header'
import Footer from '../../components/UI/Footer/Footer'
const layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )

}


export default layout