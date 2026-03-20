import dotenv from "dotenv";
dotenv.config();
const mongourl=process.env.mongodb;
const PORT=process.env.port;
const secretToken=process.env.jwt_secret;
export {mongourl,PORT,secretToken};