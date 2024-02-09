import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    phoneNumber: { type: String, unique: true, required: true },
    specializedIn: [
        {
            type: String 
        }
    ]
},
 {timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);
