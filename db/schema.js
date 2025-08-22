import mongoose from "mongoose";

const pincodeSchema = new mongoose.Schema({
    CircleName: { type: String, required: true },
    RegionName: { type: String, required: true },
    DivisionName: { type: String, required: true },
    OfficeName: { type: String, required: true },
    Pincode: { type: Number, required: true }, // Matches the numeric pincode field
    OfficeType: { type: String, required: true },
    Delivery: { type: String, required: true },
    District: { type: String, required: true },
    StateName: { type: String, required: true },
    Latitude: { type:  mongoose.Schema.Types.Mixed, required: false }, // Optional, since not all data might have lat/long
    Longitude: { type:  mongoose.Schema.Types.Mixed, required: false }, 
  });

// Create the model
const Pincodes = mongoose.model('Pincode', pincodeSchema);

export default Pincodes;
