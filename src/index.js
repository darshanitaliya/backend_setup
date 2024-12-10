import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config();
// for experimental feature when run at that time get all env (do in .json)
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

connectDB()
  .then(() => {
    app.on('error', (error) => {
      console.log('error', error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Mongodb connection failed', err);
  });
