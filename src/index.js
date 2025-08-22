import express from "express";
import axios from "axios";
import "../db/mongodbConnect.js"
import Pincodes from "../db/schema.js";

const app = express();
const port = 4040;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hi i am address');
})

app.get('/address/:pincode', async (req, res) => {
    try {
      const pincodeData = await Pincodes.find({ Pincode: req.params.pincode }).sort({ _id: -1 }) // Sort by _id in descending order
      .limit(1);
      if (pincodeData && pincodeData.length > 0) {
        res.json(pincodeData[0]);
      } else {
        res.status(404).json({ message: 'Pincode not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.listen(port,()=>{
    console.log(`Backend running on port ${port}`);
})