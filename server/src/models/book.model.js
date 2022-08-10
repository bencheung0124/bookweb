import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: null,
    },
    category: {
        type: String,
        default: null,
    },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
