// import Button from 'react-bootstrap/Button';
import React, { Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) => {
    return (<Fragment>
        <Modal
            show={true}
            onHide={() => { }}
            aria-labelledby="ModalHeader"
        >
            
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
            <Modal.Footer>
                {/* <Modal className='btn btn-default'>Cancel</Modal.Dismiss> */}
                <button className='btn btn-primary' onClick={() => { }}>
                    Save
            </button>
            </Modal.Footer>
        </Modal>
    </Fragment>
    )
}

export default modal