const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema =  mongoose.Schema({
  description:{type: String, required: true},
  done:{type: Boolean, require: true, default:false},
  createdAt: {type: Date, ddefault: Date.now}
})

module.exports = restful.model('Todo', todoSchema)
