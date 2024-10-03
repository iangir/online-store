import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Row from 'react-bootstrap/esm/Row';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
	const { device } = useContext(Context);
	return (
		<Row className='d-flex my-1'>
			{device.devices.map((device) => (
				<DeviceItem key={device.id} device={device} />
			))}
		</Row>
	);
});

export default DeviceList;
