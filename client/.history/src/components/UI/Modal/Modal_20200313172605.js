// import Button from 'react-bootstrap/Button';
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) =>{
    return (
        <div>
            <Modal>{props.children}</Modal>
        </div>
    )
}

export default modal