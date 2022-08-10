import mongoose from 'mongoose';
import { mongodbURL } from '../config.js';

const initMongoDB = async () => {
    mongoose.connect(mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const dbconnection = mongoose.connection;
    dbconnection.on('connected', () => {
        console.info('database is connected successfully');
    });
    dbconnection.on('disconnected', () => {
        console.info('database is disconnected successfully');
    });
    dbconnection.on('error', console.error.bind(console, 'connection error:'));
    return dbconnection;
};

export default initMongoDB;
