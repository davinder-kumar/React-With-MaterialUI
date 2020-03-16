// import Button from 'react-bootstrap/Button';
import React  from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) => {
    console.log(props)
    return (<>
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="ModalHeader"
        >
            
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
           
        </Modal>
    </>
    )
}

export default modal