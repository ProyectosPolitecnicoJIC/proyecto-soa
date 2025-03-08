import mysql2 from 'mysql2';

const {
    USER_DB_HOST,
    USER_DB_USER,
    USER_DB_PASSWORD,
    USER_DB_DATABASE
} = process.env;

const db = mysql2.createConnection({
    host: USER_DB_HOST,
    user: USER_DB_USER,
    password: USER_DB_PASSWORD,
    database: USER_DB_DATABASE
});

export default db;
