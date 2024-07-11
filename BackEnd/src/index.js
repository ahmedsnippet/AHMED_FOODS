import connectDB from "./Database/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./.env"
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server Is Running At PORT ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })
