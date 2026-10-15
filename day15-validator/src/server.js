import  config  from "../src/config/config.js";
import app from "./app/app.js";
import dbConnect from "./config/db.connect.js";

await dbConnect()

app.listen(config.PORT, () => {
    console.log(`server is running on port ${config.PORT}`)
}) 