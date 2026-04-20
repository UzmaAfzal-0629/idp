const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/university_system');

app.get('/', (req,res)=> res.send('Backend Running'));

app.listen(5000, ()=> console.log('Server running'));
