import mongoose from 'mongoose';

const positiveIntegerChecker = (value) => {
    if (typeof value === 'string' || typeof value === 'number') {
        const num = Number(value);
        if (Number.isInteger(num) && num >= 0) {
            return true;
        }
    }
    return false;
};

const mongoObjectIdValidator = (id) => {
    if (mongoose.isObjectIdOrHexString(id)) {
        return true;
    }
    return false;
};

const phoneNumberValidator = (phoneNumber) => {
    const pattern = /^[0-9\b]+$/;
    if (pattern.test(phoneNumber) && phoneNumber.length === 8) return true;
    return false;
};

const nameValidator = (name) => {
    const pattern = /^[a-zA-Z\b]+$/;
    if (pattern.test(name) && name.length > 0 && name.length <= 50) return true;
    return false;
};

export {
    positiveIntegerChecker,
    mongoObjectIdValidator,
    phoneNumberValidator,
    nameValidator,
};
