import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
	return (
		<Container>
			<Row>
				<Col md={3} className='mt-3'>
					<TypeBar />
				</Col>
				<Col md={9} className='mt-3'>
					<BrandBar />
					<DeviceList />
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
