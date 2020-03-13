import Button from 'react-bootstrap/Button';
import React from 'react'

const modal = (props) =>{
    return (
        <div>
            <Button>props.children</Button>
        </div>
    )
}

export default modal