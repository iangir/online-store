import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { IoIosStarOutline } from 'react-icons/io';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Device = () => {
	const device = {
		id: 1,
		name: 'iPhone 12 PRO',
		price: 100000,
		rating: 5,
		img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	};
	const description = [
		{ id: 1, title: 'Memory', description: '256 GB' },
		{ id: 2, title: 'Color', description: 'Pink gold' },
		{ id: 3, title: 'RAM', description: '5 GB' },
		{ id: 4, title: 'RAM', description: '5 GB' },
		{ id: 5, title: 'RAM', description: '5 GB' },
	];
	return (
		<Container className='mt-1'>
			<Card data-bs-theme='dark'>
				<h2 className='m-2'>{device.name}</h2>
				<Row>
					<Col style={{ width: '100%', height: '500px' }}>
						<Image
							className='mx-4 mt-2'
							width={'90%'}
							height={'90%'}
							src={device.img}
							rounded
						/>
					</Col>
					<Col
						className='d-flex flex-column align-items-center justify-content-between border-primary border-2'
						style={{ width: '100%', height: '100%' }}
					>
						<h3>Specs:</h3>
						{description.map((info, index) => (
							<Row
								className='mt-2 p-1'
								style={{
									background: index % 2 === 0 ? 'primary' : 'secondary',
									// background: 'primary',
								}}
								key={info.id}
							>
								{info.title}: {info.description}
							</Row>
						))}
					</Col>

					<Col
						className='mt-2 d-flex align-items-center justify-content-between border-primary border-2'
						style={{ width: '100%', height: '100%' }}
					>
						<div className='w-100 h-100 mx-4'>
							<div className='d-flex flex-column justify-content-between'>
								<div className='d-flex flex-row justify-content-between'>
									<h3>{device.price} rub.</h3>
									<h2 className='d-flex align-items-center'>
										<div>{device.rating}</div>
										<IoIosStarOutline />
									</h2>
								</div>
								<Button variant={'outline-primary'} className='mt-3'>
									Add to cart
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Card>
			{/* <Col md={4}> */}
			{/* <Image
					className='m-1'
					width={'100%'}
					height={'100%'}
					src={device.img}
					rounded
				/> */}
			{/* </Col> */}
			{/* <Col md={4} className='d-flex justify-content-center'> */}
		</Container>
	);
};

export default Device;
