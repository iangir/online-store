import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
	const { user } = useContext(Context);
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Element }) => (
					<Route element={<Element />} path={path} key={path} />
				))}
			{publicRoutes.map(({ path, Element }) => (
				<Route element={<Element />} path={path} key={path} />
			))}
			<Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
