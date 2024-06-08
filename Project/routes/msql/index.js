const router = require('express').Router();
const authRouter = require('./userRoute');

router.use('/userRoute', authRouter);


module.exports = router;