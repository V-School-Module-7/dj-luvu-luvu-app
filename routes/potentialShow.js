const express = require('express')
const potentialRouter = express.Router()
const PotentialShow = require('../models/PotentialShow')

potentialRouter.route('/')
    .get((req, res, next) => {
        PotentialShow.find((err, show) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(show)
        })
    })
    .post((req, res, next) => {
        const show = new PotentialShow(req.body)
        show.save(function(err, newShow) {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newShow)
        })
    })

potentialRouter.route('/:showId')
    .get((req, res, next) => {
        PotentialShow.findOne({ _id: req.params.showId }, (err, show) => {
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
        PotentialShow.findOneAndUpdate(
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
        PotentialShow.findOneAndRemove({ _id: req.params.showId }, (err, show) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(show)
        })
    })

module.exports = potentialRouter