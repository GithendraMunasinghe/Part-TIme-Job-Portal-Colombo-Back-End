import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'


export const generatedToken = (payload) => {
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export const verifyToken = (token) => {
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.verify(token, JWT_SECRET)
};