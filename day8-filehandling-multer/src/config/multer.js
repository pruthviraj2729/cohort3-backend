const multer = require('multer');

// disk storage for local
// const localStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },

//     filename: (req, file, cb) => {
     // size and ratio and format check kr sakte ho
//         console.log("diskstorage me file", file);
//         cb(null,  Date.now() + '-' + file.originalname)
//     }
// })


// for srver
const localStorage = multer.memoryStorage()

const upload = multer({ storage: localStorage})

module.exports = upload