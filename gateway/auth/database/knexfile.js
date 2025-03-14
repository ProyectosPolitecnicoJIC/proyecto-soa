import dbConfig from "./databaseconfig.js";

// Configuración de la conexión a la base de datos

export const knexConfig = {
    client: "mysql2",
    connection: {
        host: dbConfig.AUTH_DB_HOST,
        user: dbConfig.AUTH_DB_USER,
        password: dbConfig.AUTH_DB_PASSWORD,
        database: dbConfig.AUTH_DB_DATABASE,
        port: dbConfig.AUTH_DB_PORT,
    },
};
