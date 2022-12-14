const nodeRestful = require('node-restful')

const_= require('lodash')


module.exports = (req, res, next) => {
    const bunble = res.locals.bundle

    if(bundle.errors) {

        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})

    }else {
        next()
    }
}

const parseErrors =  (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}