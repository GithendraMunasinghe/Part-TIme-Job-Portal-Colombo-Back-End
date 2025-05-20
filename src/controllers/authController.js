import prisma from "../config/db";
import { comparePassword } from "../utils/bcrypt";
import { generatedToken } from "../utils/jwt";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email: email } })
        if (!user) {
            res.status(401).json({ message: "Invalid email" });
            return;
        }
        const isValidPassword = await comparePassword(password, user.password)
        if (!isValidPassword) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        const payload = {
            userId: user.id,
            role: user.roleId
        }
        const token = generatedToken(payload)
        res.status(200).json({ token: token, user: user })
    } catch (error) {
        handleError(res, 'Failed to login', error)
    }
}