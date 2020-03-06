import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'


export default function MyModal(props){
    const { handleClose, showModal } = props
    return(
        <Modal show={showModal} onHide={handleClose}>
            {/* <Modal.Header className='modal-header' closeButton>
                <h5 className='modal-title'>{props.children}</h5>
            </Modal.Header> */}
            <Modal.Body className='modal-body'>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div>{props.children}</div>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <Button className='btn btn-primary btnDJ' data-dismiss='modal' onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}