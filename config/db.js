const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/mernproject", {

        })

        console.log(`mongodb connected to: ${conn.connection.host}`);
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB