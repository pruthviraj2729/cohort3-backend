import ImageKit, { toFile } from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const imagekitInstance = new ImageKit({
    urlEndpoint: process.env.URL_ENDPOINT,
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
});

export const sendFiles = async (file, fileName) => {
    if (!file || !file.buffer) {
        throw new Error("No file buffer found to upload");
    }

    const convertedFile = await toFile(file.buffer, fileName, {
        type: file.mimetype || "image/jpeg",
    });

    return await imagekitInstance.files.upload({
        file: convertedFile,
        fileName,
        folder: "cohort3-backend",
    });
};

// import ImageKit from "@imagekit/nodejs";
// import dotenv from "dotenv"


// dotenv.config()
// const imagekitInstence = new ImageKit({
//     urlEndpoint: process.env.URL_ENDPOINT,
//     privateKey: process.env.PRIVATE_KEY,
//     publicKey: process.env.PUBLIC_KEY,
// })


// export const sendFiles = async (file, fileName) => {

//     console.log("A - sendFiles called");

//     const obj = {
//         file, 
//         fileName,
//         folder: 'cohort3-backend',
//     }

//     console.log("B - ImageKit upload finished");

//     return await imagekitInstence.files.upload(obj)
// }