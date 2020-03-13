// import Button from 'react-bootstrap/Button';
import React, { Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) => {
    console.log(props.show)
    return (<Fragment>
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="ModalHeader"
        >
            
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
           
        </Modal>
    </Fragment>
    )
}

export default modal