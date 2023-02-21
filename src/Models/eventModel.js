const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const EventSchema = new mongoose.Schema({
        name: {
            type:String, 
            required:true,
            trim:true
        },
        description: {
            type:String, 
            required:true,
            trim:true
        },
        start_time: {
            type:String,
            required:true,
            trim:true
        },
        end_time: {
            type:Date, 
            required:true,
            trim:true
        },
        day_of_week:{
            type:Date,
            required:true,
            trim:true
        },
        recurring_dates:{
            type: [Number]
        },
        user_Id:{
            type:ObjectId,
            ref:"user"
        }
},{timestamps:true})


module.exports = mongoose.model("event", EventSchema)