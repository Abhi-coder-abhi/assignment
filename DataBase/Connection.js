const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

//  Connection stablish with some other mongo url only for the check the dummy database

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected".yellow.bold);
}).catch((error) => {
    console.log(error)
});
