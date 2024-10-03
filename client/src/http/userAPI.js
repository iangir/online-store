import { $host } from '.';
import { jwtDecode } from 'jwt-decode';
export const registration = async (email, password) => {
	const { data } = await $host.post('api/user/registration', {
		email,
		password,
		role: 'ADMIN',
	});
	return jwtDecode(data.token);
};

export const login = async (email, password) => {
	const response = await $host.post('api/user/registration', {
		email,
		password,
	});
	return response;
};

export const check = async () => {
	const response = await $host.post('api/user/registration');
	return response;
};
