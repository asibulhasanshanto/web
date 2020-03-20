const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type:Number,
        min:1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
    },{
        timestamps:true
});

const leaderSchema = new Schema({
   id:{
       type: Number,
       required:true,
       unique:true
   },
    name: {
        type:String,
        required:true
    },
    comments: [commentSchema]
},{
    timestamps:true
});

var Leaders = mongoose.model('Leader',leaderSchema);

module.exports = Leaders;