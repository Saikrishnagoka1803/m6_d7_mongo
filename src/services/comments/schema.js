import mongoose from "mongoose";

const {Schema, model} = mongoose;

const commentschema = new Schema({
   
    text : {type: String, required: true},
    rate : {type: Number, required: true, min: [1, "rate min is 1"],
                                            max: [5, "rate max is 5"],
                                        default: 1},
    user : {
        name: {type: String, required: true},
        avatar: {type: String, required: true},
        required: true
    },
    
},
{
    timestamps: true,
}
)

export default model("comments", commentschema)