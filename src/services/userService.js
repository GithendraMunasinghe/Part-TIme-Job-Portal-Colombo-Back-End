import prisma from "../config/db.js";

export const createUser = async (user) => {
    const newUser = await prisma.user.create({
        data: user
    })
    return newUser.id;
}

export const getUserById = async (id) => {
    return await prisma.user.findUnique({ where: { id: id } })
}

export const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email: email } })
}

export const getAllUsers = async () => {
    return await prisma.user.findMany()
}