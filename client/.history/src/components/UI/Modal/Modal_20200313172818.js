// import Button from 'react-bootstrap/Button';
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) =>{
    return <Modal sh>{props.children}</Modal>
}

export default modal