const mongoose = require("mongoose");
require("dotenv").config();
require("colors")
// 
const app = require("./app")

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successful 🛢`.red.bold);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});


