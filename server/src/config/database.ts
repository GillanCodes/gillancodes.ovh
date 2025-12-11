//Import libs
import { connect } from 'mongoose';
import config from './config';

//Connection to DB
connect(config.DB_CONNECT_STRING)
  .then(() => {
    console.log("MongoDB : Connected");
  }).catch((err: string) => {
    console.log(err);
  });
