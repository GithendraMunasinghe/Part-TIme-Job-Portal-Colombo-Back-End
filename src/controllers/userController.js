import * as userServices from '../services/userService.js'
import { hashPassword } from '../utils/bcrypt.js'
import { handleError } from '../utils/handleServerError.js'

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, roleId } = req.body
        const existingUser = await userServices.getUserByEmail(email)
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' })
        }
        const hashedPassword = await hashPassword(password)
        const userId = await userServices.createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            roleId: roleId
        })
        res.status(201).json({ message: 'User created successfully', userId })
    } catch (error) {
        handleError(res, 'Failed to create user', error)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        handleError(res, 'Failed to get users', error)
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userServices.getUserById(Number(id))
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        handleError(res, 'Failed to get user', error)
    }
}