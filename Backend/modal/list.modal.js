import mongoose from "mongoose";


const listSchema=mongoose.Schema({
    category:String,
    description:String,
    age_group:String,
    available_languages:Array,
    image:String
})

const List=mongoose.model("List",listSchema)

export default List;