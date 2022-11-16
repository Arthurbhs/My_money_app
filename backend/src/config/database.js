const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.export = mongoose.connect('mongdb://localhost/mymoney')