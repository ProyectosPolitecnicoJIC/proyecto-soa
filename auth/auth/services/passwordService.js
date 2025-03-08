import bcrypt from 'bcrypt';

export class PasswordService {
    static async encrypt(password) {
        try {
            return await bcrypt.hash(password, 10);
        } catch (error) {
            throw new Error("Error al encriptar la contraseña");
        }
    }

    static async compare(password, hashedPassword) {
        try {
            console.log(password, hashedPassword);
            return await bcrypt.compare(password, hashedPassword);
        } catch (error) {
            throw new Error("Error al comparar la contraseña");
        }
    }
}