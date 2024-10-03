import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import { Context } from '../index';

const BrandBar = observer(() => {
	const { device } = useContext(Context);
	return (
		<Row className='d-flex justify-content-center'>
			{device.brands.map((brand) => (
				<Card
					className='p-1 border-2 m-1 text-center '
					style={{ cursor: 'pointer', width: '10rem' }}
					border={
						brand.id === device.selectedBrand.id ? 'primary' : 'secondary'
					}
					onClick={() => device.setSelectedBrand(brand)}
					key={brand.id}
				>
					<Card.Title>{brand.name}</Card.Title>
				</Card>
			))}
		</Row>
	);
});

export default BrandBar;
