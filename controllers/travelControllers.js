const Travel = require('../models/travel.model')


// METHOD: GET
// DESCR: GET ALL TRAVELS
const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find() 
  
        res.status(200).json({
          message: 'success',
          travels: travels.reverse()
        })
     } catch (err) {
        res.send(err)
     }  
  
}

// DESCR: GET one TRAVEL book by id
const getTravelByID = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if (!travel) {
            return res.status(404).json({
                message: 'Not found'
            })
        }

        return res.status(200).json({
            message: 'success',
            travel
        })
    } catch (err) {
        res.send(err)
    }
}

// DESCR: add new TRAVEL book 
const addTravelBook = async (req, res) => {
    try {
        const {title, image, descr } = req.body

        const newTravel = await Travel.create({
            title,
            image,
            descr
        })

        res.status(201).json({
            message: 'success',
            newTravel
        })
    } catch (err) {
        res.send(err)
    }
}

// DESCR: add new TRAVEL book 
const removeTravelBook = async (req, res) => {
    try {
        
         await Travel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: 'deleted'
           
        })
    } catch (err) {
        res.send(err)
    }
}

// DESCR: add new TRAVEL book 
const updateTravelBook = async (req, res) => {
    try {
        const {title, image, descr } = req.body

        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            descr,
            image
        })

        res.status(200).json({
            message: 'success',
            updatedTravel
        })
    } catch (err) {
        res.send(err)
    }
}


module.exports = {
    getAllTravels,
    getTravelByID,
    addTravelBook,
    removeTravelBook,
    updateTravelBook
}