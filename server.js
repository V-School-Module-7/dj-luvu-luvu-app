const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))

app.use("/send", require("./routes/contactRouter"));
app.use("/sendBooking", require("./routes/contactRouter"));

// app.use('/api', require('./routes/auth'))
app.use('/auth', require('./routes/auth'))
app.use('/api/potential', require('./routes/potentialShow'), expressJwt({ secret: process.env.SECRET }))
app.use('/api/schedule', require('./routes/show'), expressJwt({ secret: process.env.SECRET }))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dj-luva-luva',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (err) => {
        if(err) throw err;
        console.log('Connected to the database');
    }
);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dj-luva-luva")

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use((err, req, res, next) => {
    console.error(err);
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ message: err.message })
});

app.listen(PORT, () => {
    console.log(`[+} Starting server on port ${PORT}`)
})