const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//to run local server for testing
const cors = require('cors');


//Routes
const hotelRoute = require('./api/routes/hotel-route');

const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome onboard!!');
})

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database Connected!!"))
    .catch(err => console.log(err));

app.use('/api/v3', hotelRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))