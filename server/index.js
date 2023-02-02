import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import schema from './schema/schema.js';
import { graphqlHTTP } from 'express-graphql';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () => {
  console.log(
    `The server is listening to ${port} in ${process.env.NODE_ENV}`.rainbow
      .underline
  );
});
