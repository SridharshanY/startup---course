import mongoose from "mongoose";

const user = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
)

export const User = mongoose.model('User', user)