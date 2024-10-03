import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
	const navigate = useNavigate();
	return (
		<Col
			onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
			className='m-2 d-flex justify-content-center'
		>
			<Card style={{ width: '15rem', cursor: 'pointer' }} border='secondary'>
				<Card.Img variant='top' src={device.img} rounded />
				<Card.Body className='d-flex justify-content-between align-items-center'>
					<Card.Title>{device.name}</Card.Title>
					<h4 className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<IoIosStarOutline />
					</h4>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>Apple</small>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default DeviceItem;
