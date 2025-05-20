CREATE TABLE materiales (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL,
    id_chatarreria INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

-- la tabla de materiales se relaciona con la tabla de chatarrerias por el id_chatarreria
-- pero la relacion no es directa, sino que se relaciona por el id de la tabla auth_db
