// import fs from 'fs';
// import csv from 'csv-parser';
// import Pincodes from '../db/schema.js'
// import mongoose from 'mongoose';
// const importCSV = () => {
//   fs.createReadStream('utility/pincode.csv') // Path to your CSV file
//     .pipe(csv())
//     .on('data', async (row) => {
//       const { 
//         CircleName, RegionName, DivisionName, OfficeName, Pincode, 
//         OfficeType, Delivery, District, StateName, Latitude, Longitude 
//       } = row;

//       try {
//         // Create a new Pincode document
//         const pincodeDoc = new Pincodes({
//           circleName: CircleName,
//           regionName: RegionName,
//           divisionName: DivisionName,
//           officeName: OfficeName,
//           pincode: Pincode,
//           officeType: OfficeType,
//           delivery: Delivery,
//           district: District,
//           stateName: StateName,
//           latitude: parseFloat(Latitude),
//           longitude: parseFloat(Longitude)
//         });

//         // Save the document to MongoDB, updating if pincode already exists
//         await Pincodes.findOneAndUpdate(
//           { pincode: Pincode },
//           { $set: { circleName: CircleName, regionName: RegionName, divisionName: DivisionName, officeName: OfficeName, officeType: OfficeType, delivery: Delivery, district: District, stateName: StateName, latitude: parseFloat(Latitude), longitude: parseFloat(Longitude) } },
//           { upsert: true, new: true }
//         );
//         console.log(`Inserted/Updated pincode ${Pincode}`);
//       } catch (error) {
//         console.error(`Error inserting pincode ${Pincode}:`, error);
//       }
//     })
//     .on('end', () => {
//       console.log('CSV file successfully processed');
//       mongoose.connection.close(); // Close the MongoDB connection after the import
//     });
// };

// export default importCSV;