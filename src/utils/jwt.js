import jwt from 'jsonwebtoken'
import { JwT_SECRET } from '../config/env.js'

export const generatedToken = (payload) => {
    if (!JwT_SECRET) {
        throw new Error('JwT_SECRET is not defined');
    }
    return jwt.sign(payload, JwT_SECRET, { expiresIn: '7d' });
}

export const verifyToken = (token) => {
    if (!JwT_SECRET) {
        throw new Error('JwT_SECRET is not defined');
    }
    return jwt.verify(token, JwT_SECRET)
};