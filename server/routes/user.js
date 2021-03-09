import express from 'express'



import {signin , signup , search} from '../controllers/user.js'
const router = express();


router.post('/signin' , signin)
router.post('/signup' , signup)
router.post('/search' , search)



export default router;