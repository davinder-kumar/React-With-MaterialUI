// import Button from 'react-bootstrap/Button';
import React, { Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) => {
    return(<React.Fragment>
        <Modal
            show={true}
            onHide={() => { }}
            aria-labelledby="ModalHeader"
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
            <Modal.Footer>
                // If you don't have anything fancy to do you can use
                // the convenient `Dismiss` component, it will
                // trigger `onHide` when clicked
                <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

                // Or you can create your own dismiss buttons
                <button className='btn btn-primary' onClick={}>
                    Save
            </button>
            </Modal.Footer>
        </Modal>
    </React.Fragment>
    )
}

export default modal