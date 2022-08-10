import express from 'express';
// import { positiveInteger, mongoObjectId } from '../middlewares/requestInfoChecker.js';
import Book from '../models/book.model.js';
import { positiveIntegerChecker } from '../tools/requestParamsValidator.js';

const bookRouter = express.Router();

bookRouter.get('/', async (req, res) => {
    const { pagePerRequest, currentPage } = req.query;
    if (positiveIntegerChecker(pagePerRequest) && positiveIntegerChecker(currentPage)) {
        const total = await Book.find().count();
        const booklist = await Book.find()
            .skip(currentPage * pagePerRequest)
            .limit(pagePerRequest);
        return res.json({
            total,
            booklist,
        });
    }
    return res.json({
        msg: 'Request parameters error',
    });
});

export default bookRouter;
