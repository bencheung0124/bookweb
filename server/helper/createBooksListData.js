/* eslint-disable no-await-in-loop */
import 'dotenv/config.js';
import axios from 'axios';
import initMongoDB from '../src/middlewares/database.js';
import Book from '../src/models/book.model.js';

const booksApiUrl = 'https://api.itbook.store/1.0/search/';
const searchKey = ['node', ' mongo', 'aws'];
const Category = ['Fiction', 'Comics', 'Dictionary'];
const booksSet = new Set();
const targetNumber = 250;

const getCurrentBooksNumber = () => booksSet.size;

const getBooksListBySearchKey = async (url) => {
    let index = 1;
    while (index > 0) {
        const response = await axios.get(`${url}/${index}`).catch((err) => console.error(err.code));
        try {
            if (response.data.error === '0' && response.data.books.length > 0) {
                response.data.books.forEach((e) => {
                    const temp = {};
                    temp.title = e.title;
                    temp.image = e.image;
                    temp.category = Category[Math.floor(Math.random() * Category.length)];
                    e.price === '$0.00' ? temp.price = Math.floor(Math.random() * 500) : temp.price = Math.floor(e.price.substring(1, e.price.length) * 10);
                    booksSet.add(temp);
                });
            } else {
                index = -1;
            }
            index += 1;
        } catch (err) {
            index = -1;
        }
    }
};

const genBooksList = async () => {
    let i = getCurrentBooksNumber();
    let j = 0;
    while (i < targetNumber && j < searchKey.length) {
        await getBooksListBySearchKey(`${booksApiUrl}${searchKey[j]}`);
        i = getCurrentBooksNumber();
        j += 1;
    }
    return Array.from(booksSet);
};

const main = async () => {
    const dbconnection = await initMongoDB();
    const bookslist = await genBooksList();
    await Book.insertMany(bookslist)
        .then(() => console.info('Books list insert success'))
        .catch(() => console.error('Books list insert fail'));
    dbconnection.close();
};

main();
