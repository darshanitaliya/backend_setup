import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();
// for experimental feature when run at that time get all env (do in .json)
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

connectDB();
