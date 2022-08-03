import mongoose from 'mongoose';
import {username,pw} from '../config/database.config.json';

mongoose.connect(`mongodb+srv://${username}:${pw}@cluster0.lqn8ink.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports.autoload = false