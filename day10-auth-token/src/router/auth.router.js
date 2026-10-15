// import express from 'express'
// import jwt from 'jwt'

// const router = express.Router()

// router.post('/auth', async (req, res) => {
//     try {
        
//         const {name, email, password} = req.body;


//         // user data stored in database

//         const token = await jwt.sign({
//             name,
//             email
//         },
//             ""
//         )

//         res.status(201).json({
//             message: "token created successfully",
//             data: token
//         })

//     } catch (error) {
//         res.status(500).json({
//             message: 'Internal server error',
//             error: error.message
//         })
//     }
// } )

// export default router