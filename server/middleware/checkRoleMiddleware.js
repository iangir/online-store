const jwt = require('jsonwebtoken');

module.exports = function (role) {
	return function (req, res, next) {
		if (req.method === 'OPTIONS') {
			next();
		}
		try {
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				console.log('!token');
				return res.status(401).json({ message: 'Unauthorized' });
			}
			const decoded = jwt.verify(token, process.env.SECRET_KEY);
			if (decoded.role !== role) {
				return res.status(403).json({ message: 'No access' });
			}
			req.user = decoded;
			console.log(req.user);
			next();
		} catch (e) {
			console.log(e);
			res.status(401).json({ message: 'Unauthorized' });
		}
	};
};
