const express = require("express")
const router = express.Router()
const CoordService = require("../services/CoordService")

router.post("/save", async (req, res) => {
    const payload = req.body
    const result = await CoordService.saveCoordinates(payload.latitude, payload.longitude, payload.notes)
    if (result.isSuccess) {
        res.status(201).send({
            message: result.message,
            data: {
                id: result.data.id
            }
        })
    }   
    else {
        res.status(400).send({
            message: result.message
        })
    }
})

module.exports = router