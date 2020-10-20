const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors')
const morgan = require('morgan')

//MIDDILWARES
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())

// Routes
const planRoutes = require('./routes/planRoutes')





app.use(morgan('dev'))

//ROUTES
app.use('/api/plan', planRoutes)

//Catching 404 Error
app.use((req, res, next) => {
    const error = new Error('INVALID ROUTE')
    error.status = 404
    next(error);
})

//Error handler function
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/today"
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
        app.listen(PORT)
        console.log("server Started")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })

// process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD
// "mongodb://127.0.0.1:27017/frontEndProject"

