const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "src", ".env") });

const app = require('./src/app')

const port = 3000;

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})