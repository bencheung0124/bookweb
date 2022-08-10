import express from 'express';
import preorderCreator from '../tools/preorderCreator.js';
import {
    nameValidator,
    phoneNumberValidator,
    mongoObjectIdValidator,
} from '../tools/requestParamsValidator.js';

const preorderRouter = express.Router();

preorderRouter.post('/', async (req, res) => {
    const {
        customerName, customerPhoneNumber, bookId,
    } = req.body;
    if (nameValidator(customerName) && phoneNumberValidator(customerPhoneNumber) && mongoObjectIdValidator(bookId)) {
        const preorderDetails = await preorderCreator(customerName, customerPhoneNumber, bookId);
        return res.json({ preorderDetails });
    }
    return res.json({ msg: 'Preorder information incorrect' });
});

export default preorderRouter;
