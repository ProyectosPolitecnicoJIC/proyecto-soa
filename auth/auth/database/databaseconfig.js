const dbConfig = {
    AUTH_DB_HOST: process.env.AUTH_DB_HOST || "localhost",
    AUTH_DB_USER: process.env.AUTH_DB_USER || "root",
    AUTH_DB_PASSWORD: process.env.AUTH_DB_PASSWORD || "root",
    AUTH_DB_DATABASE: process.env.AUTH_DB_DATABASE || "auth_db",
    AUTH_DB_PORT: process.env.AUTH_DB_PORT || "3400",
};

export default dbConfig;