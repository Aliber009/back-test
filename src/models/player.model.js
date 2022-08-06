const mongoose = require('mongoose');
const  paginate  =require('./paginate')


const playerSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
        type: String,
    },
    goal: {
        type: Number,
    },
    salary: {
        type:Number,
    },
    devise: {
        type: String,
    },
    pictureURI: {
        type: String,
    },
 }
);

playerSchema.plugin(paginate);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;