const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true, trim: true},
    nickname: {type:String, required: true, trim: true},
    address : {type:String, required: true},
    phone: {type:String, required: true},
    role: {type: String, default:'user'}
},
    {collection: 'users'}
);

module.exports = mongoose.model('User', userSchema);