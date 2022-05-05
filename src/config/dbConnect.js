import mongoose from "mongoose";

await mongoose.connect("mongodb+srv://victoresteves10:120717Vi@cluster0.apz4v.mongodb.net/Biblioteca?");

let db = mongoose.connection;

export default db;