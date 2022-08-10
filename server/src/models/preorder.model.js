import mongoose from 'mongoose';

const preorderSchema = new mongoose.Schema({
    preorderId: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhoneNumber: {
        type: String,
        required: true,
    },
    preorderDate: {
        type: Date,
        default: Date.now,
    },
    preorderBookId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
});

const Preorder = mongoose.model('Preorder', preorderSchema);
export default Preorder;
