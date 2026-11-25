// server.ts
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import authController from './controllers/authController';
import usersController from './controllers/usersController';
// import charactersController from './controllers/charactersController';


const PORT = Number(process.env.PORT) || 8000;

const app = express();



/**
 * Keeps only origins that are actually set, so a missing FRONTEND_URL isn't passed to cors.
 *
 * @param origin an origin that may be undefined.
 *
 * @returns true when the origin is a non-empty string.
 */
function isDefinedOrigin(origin: string | undefined): origin is string {
    return Boolean(origin);
}


/**
 * Logs that the server has started.
 */
function logServerStart() {
    console.log(`Server is running on port ${PORT}`);
}



app.use(cors({
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL,
    ].filter(isDefinedOrigin),
}));
app.use(express.json());


// —— CONTROLLERS —— //
app.use('/', authController);                   
app.use('/user', usersController);              
// app.use('/characters', charactersController);   


app.listen(PORT, logServerStart);