
const {Router} = require('express')

const router = Router()
const {getAllTravels, getTravelByID, addTravelBook, updateTravelBook, removeTravelBook} = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.post('/add', addTravelBook)
router.get('/:id', getTravelByID)
router.put('/:id', updateTravelBook)
router.delete('/:id', removeTravelBook)





module.exports = router