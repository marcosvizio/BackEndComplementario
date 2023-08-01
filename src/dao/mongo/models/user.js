import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Carts'
    },
    role:{
        type: String,
        default: 'user'
    },
    password: String
})

const userModel = mongoose.model(collection, schema);

export default userModel;