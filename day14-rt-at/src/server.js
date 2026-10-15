import app from "./app/app.js";
import dbConnect from "./config/dbConnect.js"

await dbConnect();

app.listen(3000, () => {
    console.log("server is running at port 3000")
})