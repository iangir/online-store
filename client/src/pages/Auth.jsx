import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
	const { user } = useContext(Context);
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [email, setEmail] = useState('some@mail.com');
	const [pwd, setPwd] = useState('qwerty');

	const auth = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, pwd);
			} else {
				data = await registration(email, pwd);
			}
			user.setUser(data);
			user.setIsAuth(true);
			location(SHOP_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5' data-bs-theme='dark'>
				<h2 className='m-auto'>Welcome to E-store</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-4'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Password'
						type='password'
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
					/>
					<div className='d-flex justify-content-between'>
						{isLogin ? (
							<div className='mt-3'>
								New to us?{' '}
								<NavLink to={REGISTRATION_ROUTE}>Create an account</NavLink>
							</div>
						) : (
							<div className='mt-3'>
								Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
							</div>
						)}

						<Button
							onClick={auth}
							variant={'outline-primary'}
							className='mt-3 align-self-end'
						>
							{isLogin ? 'Sign up' : 'Create account'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;
