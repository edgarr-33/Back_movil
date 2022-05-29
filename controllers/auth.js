const router = require('express').Router();
const register = require('./register')
const login = require('./login')
const logout = require('./logout')

router.post('/register', register);
router.post('/login', login);
// router.get('/logout', logout);

module.exports = router;