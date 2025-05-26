import prisma from "../config/db.js";

export const create = async (data) => {
    const newJob = await prisma.job.create({ data: { ...data } })
    return newJob.id
}

export const getAll = async () => {
    return await prisma.job.findMany()
}

export const getById = async (id) => {
    return await prisma.job.findUnique({ where: { id: id } })
}

export const getByUserId = async (id) => {
    return await prisma.job.findUnique({ where: { employerId: id } })
}

export const update = async (id, data) => {
    await prisma.job.update({ where: { id: id }, data: data })
}

export const deleteJob = async (id) => {
    await prisma.job.delete({ where: { id: id } })
}