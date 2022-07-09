const User = require('../models/user');

module.exports = (router) => {

	router.post('/register', (req, res) => {

		if (!req.body.firstname) {
			res.json({ success: false, message: 'You must provide an firstname' });
		} else {
			if (!req.body.lastname) {
				res.json({ success: false, message: 'You must provide an lastname' });
			} else {
				if (!req.body.idnumber) {
					res.json({ success: false, message: 'You must provide an idnumber' });
				} else {
					if (!req.body.phonenumber) {
						res.json({ success: false, message: 'You must provide an phonenumber' });
					} else {
						if (!req.body.email) {
							res.json({ success: false, message: 'You must provide an email' });
						} else {
							if (!req.body.password) {
								res.json({ success: false, message: 'You must provide an password' });
							} else {
								let user = new User({
									firstname: req.body.firstname,
									lastname: req.body.lastname,
									idnumber: req.body.idnumber,
									phonenumber: req.body.phonenumber,
									firstname: req.body.firstname,
									email: req.body.email.toLowerCase(),
									password: req.body.password
								});
								user.save((err) => {
									if (err) {
										res.json({ success: false, message: 'Could not Register user. Error: ', err });
							}else {
								res.json({ success: true, message: 'Registered successfully' });
							}
							});
						}
					}
				}
			}
		}
	}
	});
	return router; 
}