const Coord = require("../models/CoordModel");

const coordService = {
    async saveCoordinates(latitude, longitude, notes) {
        try {
            const result = await Coord.create({
                notes: notes,
                lng: latitude,
                lat: longitude,
            });
            return {
                isSuccess: true,
                message: "Save success",
                data: {
                    id: result._id,
                }
            }
        } catch (err) {
            return {
                isSuccess: false,
                message: "Saving failed, " + err.message,
            }
        }
    }
}

module.exports = coordService