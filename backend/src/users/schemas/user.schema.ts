import {Schema} from 'mongoose';

export const UserSchema = new Schema({
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})