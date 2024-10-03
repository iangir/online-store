import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
	const [showBrand, setShowBrand] = useState(false);
	const [showType, setShowType] = useState(false);
	const [showDevice, setShowDevice] = useState(false);

	return (
		<Container className='d-flex flex-column'>
			<Button onClick={() => setShowType(true)} className='mt-2 p-2'>
				Add type
			</Button>
			<Button onClick={() => setShowBrand(true)} className='mt-2 p-2'>
				Add brand
			</Button>
			<Button onClick={() => setShowDevice(true)} className='mt-2 p-2'>
				Add device
			</Button>
			<CreateBrand show={showBrand} handleClose={() => setShowBrand(false)} />
			<CreateType show={showType} handleClose={() => setShowType(false)} />
			<CreateDevice
				show={showDevice}
				handleClose={() => setShowDevice(false)}
			/>
		</Container>
	);
};

export default Admin;
