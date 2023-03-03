const data = require("../data/data.js");


exports.getCourse = async(req, res) => {
    try {
        res.status(200).json(data)

    } catch (error) {
        console.error(error)
    }
};
