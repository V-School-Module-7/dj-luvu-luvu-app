const express = require('express');
const contactRouter = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server Ready to Send Email')
    }
})

contactRouter.post('/', (req, res, next) => {
    console.dir(req.body)
    const mail = {
        from: `${req.body.name} <${req.body.email}>`,
        to: `djluvaluva@gmail.com`,
        subject: `New ${req.body.type} inquiry via DJ Luva Luva Website`,
        text: `
        From: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Show Type: ${req.body.type}
        Message:
        ${req.body.emailBody}
        ${req.body.venue ? `Venue Name: ${req.body.venue}` : ''} 
        ${req.body.location ? `Location of Show: ${req.body.location}` : ''} 
        ${req.body.events ? `Date: ${req.body.events}` : ''} 
        ${req.body.time ? `Time: ${req.body.time}` : ''}
        `
    }
    transporter.sendMail(mail, (error, data) => {
        if (error) {
            res.json({
                status: 'fail'
            });
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = contactRouter