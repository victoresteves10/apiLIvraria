import mongoose from "mongoose";
import "dotenv/config";
const key = process.env.DB_PASS

await mongoose.connect(`mongodb+srv://victoresteves10:${key}@cluster0.apz4v.mongodb.net/Biblioteca?`);

let db = mongoose.connection;

export default db;