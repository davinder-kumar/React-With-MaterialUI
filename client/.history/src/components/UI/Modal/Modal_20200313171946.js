import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const modal = (props) =>{
    return (
        <div>
            <Button>props.children</Button>
        </div>
    )
}

export default modal