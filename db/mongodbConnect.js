import mongoose from "mongoose";
// import importCSV from "../utility/csv.js";
import fs from 'fs';
import csv from 'csv-parser';

mongoose.connect("mongodb+srv://sabalsinha20:Nanoheal%40123@cluster0.zzdf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Db Connected Succesfully");
}).catch((error)=>{
    console.log("Error while connecting db",error);
})