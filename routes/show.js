const express = require('express')
const showRouter = express.Router()
const Show = require('../models/Show')

showRouter.route('/')
    .get((req, res, next) => {
        Show.find((err, show) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(show)
        })
    })
    .post((req, res, next) => {
        const show = new Show(req.body)
        show.save(function(err, newShow) {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newShow)
        })
    })

showRouter.route('/:showId')
    .get((req, res, next) => {
        Show.findOne({ _id: req.params.showId }, (err, show) => {
            if(err) {
                res.status(500)
                return next(err)
            } else if(!show) {
                res.status(400)
                return next(new Error('No show found'))
            }
            return res.send(show)
        })
    })
    .put((req, res, next) => {
        Show.findOneAndUpdate(
            { _id: req.params.showId },
            req.body,
            { new: true },
            (err, show) => {
                if(err) {
                    console.log('Error')
                    res.status(500)
                    return next(err)
                }
                return res.send(show)
            }
        )
    })
    .delete((req, res, next) => {
        Show.findOneAndRemove({ _id: req.params.showId }, (err, show) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(show)
        })
    })

module.exports = showRouter