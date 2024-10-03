import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand>
					<NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none' }}>
						E-Store
					</NavLink>
				</Navbar.Brand>
				{user.isAuth ? (
					<Nav className='ml-auto'>
						<Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>Admin</Nav.Link>
						<Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Sign out</Nav.Link>
					</Nav>
				) : (
					<Nav className='ml-auto'>
						<Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Sign up</Nav.Link>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
