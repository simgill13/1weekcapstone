import 'babel-polyfill';
import express from 'express';
const bodyParser = require('body-parser');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mlab db goes here';
const router = express.Router();
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const {Houses} = require('./models');

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));



//get, post, put, delete functions here


function runServer() {
    return new Promise((resolve, reject) => {
      mongoose.connect(DATABASE_URL, err => {
        if(err) {
          return reject(err);
        }
        console.log('Db connected');

        app.listen(PORT, HOST, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          const host = HOST || 'localhost';
          console.log(`Listening on ${host}:${PORT}`);
         });
      });
    });
}

if (require.main === module) {
    runServer()
    .catch(console.error);

}