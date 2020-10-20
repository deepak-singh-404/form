const express = require('express')
const router = express.Router()




const { planRegister, getPlanRegister } = require('../controllers/planController')
                                   



router.post('/', planRegister)
router.get('/:id', getPlanRegister)






module.exports = router