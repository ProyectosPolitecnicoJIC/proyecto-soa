CREATE TABLE user_details (
    id INT PRIMARY KEY,
    nombre_chatarreria VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

-- tenemos una tabla de auth_db y se relaciona con la tabla user_details por el id, por esto no se deja el id como autoincremental
