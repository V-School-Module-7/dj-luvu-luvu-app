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
        from: `${req.body.fullName} <${req.body.email}>`,
        to: `djluvaluvaemail@gmail.com`,
        subject: `NEW MESSAGE via DJ Luva Luva Contact Form`,
        text: `
        From: ${req.body.fullName}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Message:
        ${req.body.emailBody} ${req.body.venue ? `\n\tVenue Name: ${req.body.venue}` : ''} ${req.body.location ? `\n\tLocation of Show: ${req.body.location}` : ''} ${req.body.event ? `\n\tDate: ${req.body.event}` : ''} ${req.body.time ? `\n\tTime: ${req.body.time}` : ''}`
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