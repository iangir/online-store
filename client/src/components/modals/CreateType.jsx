import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import React from 'react';

const CreateType = ({ show, handleClose }) => {
	return (
		<Modal centered show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new type</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control placeholder='Add type name' />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={handleClose}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;
