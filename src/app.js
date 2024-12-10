import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// use cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

// use json formate for data or
app.use(express.json({ limit: '16kb' }));
// for get data from url
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
// for static file
app.use(express.static('public'));
// for (CURD) set cookie
app.use(cookieParser());

export { app };
