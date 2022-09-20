import Validator from 'validatorjs';

export const getUsers = (req, res) => {
	res.json({
		data: [
			{
				firstName: 'Henri',
				lastName: 'Schmidt',
				age: 26,
				email: 'hs@example.com',
				userName: 'hschmidt'
			},
			{
				firstName: 'Alesi',
				lastName: 'Morgenstern',
				age: 27,
				email: 'am@example.com',
				userName: 'amorgenstern'
			}
		]
	});
};

const rules = {
	firstName: 'required|between:3,30|alpha',
	lastName: 'required|between:3,30|alpha',
	age: 'required|integer|between:18,99',
	email: 'required|email',
	userName: 'required|alpha_dash|between:3,15'
};

export const addUser = (req, res) => {
	const data = req.body;

	const validation = new Validator(data, rules);
	const success = validation.passes();

	if (success) {
		res.json({
			status: 'ok'
		});
	} else {
		res.status(406).json({
			status: 'error',
			errors: [validation.errors]
		});
	}
};
