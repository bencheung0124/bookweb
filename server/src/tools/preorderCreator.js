import moment from 'moment';
import Preorder from '../models/preorder.model.js';

const dateTimeFromat = 'YYYYMMDDHHmmss';

const preorderIdGenerator = (phoneNumber) => `${moment(new Date()).format(dateTimeFromat)}-${phoneNumber}`;

const preorderCreator = async (customerName, customerPhoneNumber, bookID) => {
    const preorderId = preorderIdGenerator(customerPhoneNumber);
    const newPreorder = await Preorder.create({
        preorderId,
        customerName,
        customerPhoneNumber,
        preorderBookId: bookID,
    });
    return newPreorder;
};

export default preorderCreator;
