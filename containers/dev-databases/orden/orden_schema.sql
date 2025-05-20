CREATE TABLE ordenes (
    id INT PRIMARY KEY,
    id_usuario INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ordenes_materiales (
    id INT PRIMARY KEY,
    id_orden INT NOT NULL,
    id_material INT NOT NULL,
    cantidad INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_orden) REFERENCES ordenes(id)
);

-- la tabla de ordenes se relaciona con la tabla de ordenes_materiales por el id_orden
-- la tabla de ordenes_materiales se relaciona con la tabla de materiales por el id_material
-- la tabla de ordenes se relaciona con la tabla de auth_db por el id_chatarreria
