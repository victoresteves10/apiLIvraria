import mongoose from "mongoose";
import "dotenv/config";
const key = process.env.DB_PASS
const user = process.env.DB_USER

await mongoose.connect(`mongodb+srv://${user}:${key}@cluster0.apz4v.mongodb.net/Biblioteca?`);

let db = mongoose.connection;

export default db;