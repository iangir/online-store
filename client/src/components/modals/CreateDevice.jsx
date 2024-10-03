import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

import React, { useContext } from 'react';
import { Context } from '../..';

const CreateDevice = ({ show, handleClose }) => {
	const { device } = useContext(Context);
	const [info, setInfo] = useState([]);

	const addFeature = () => {
		setInfo([{ title: '', description: '', id: Date.now() }, ...info]);
	};
	const delFeature = (id) => {
		setInfo(info.filter((i) => id !== i.id));
	};

	return (
		<Modal size='lg' centered show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new device</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2'>
						<Dropdown.Toggle variant='primary' id='dropdown-type'>
							Choose the type
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2'>
						<Dropdown.Toggle variant='primary' id='dropdown-brand'>
							Choose the brand name
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className='mt-2' placeholder='Add device name' />
					<Form.Control
						className='mt-2'
						placeholder='Add device price'
						type='number'
					/>
					<Form.Control
						className='mt-2'
						placeholder='Add device photos'
						type='file'
					/>
					<hr />
					<Button variant='primary' onClick={addFeature}>
						Add new feature
					</Button>
					{info.map((i) => (
						<Row className='mt-3' key={i.id}>
							<Col>
								<Form.Control placeholder='Type feature title' />
								<Form.Control
									className='mt-2'
									placeholder='Type feature description'
								/>
							</Col>
							<Button
								className='w-25 my-auto'
								variant='outline-danger'
								onClick={() => delFeature(i.id)}
							>
								Delete
							</Button>
							<hr />
						</Row>
					))}
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

export default CreateDevice;
