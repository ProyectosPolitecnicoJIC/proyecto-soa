import { PasswordService } from "../services/passwordService.js";
import { databaseService } from "../database/databaseService.js";

export class authRepository {
    async login(email, password) {
        const auth = await databaseService("auth")
            .select("auth_id", "auth_email", "auth_password")
            .where("auth_email", email)
            .first(); 

        if (!auth) {
            throw new Error("Usuario no encontrado");
        }

        const isValid = await PasswordService.compare(password, auth.auth_password);
        if (!isValid) {
            throw new Error("Credenciales incorrectas");
        }

        return { message: "Login exitoso", auth };
    }

    async register(email, password) {
        const hashedPassword = await PasswordService.encrypt(password);

        const [auth_id] = await databaseService("auth").insert({
            auth_email: email,
            auth_password: hashedPassword,
          });

        return { message: "Usuario registrado", auth_id };
    }
}