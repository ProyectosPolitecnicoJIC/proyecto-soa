# Dominios:

## 1. Autenticación 
Gestiona el registro y autenticación de usuarios.

### Endpoints:

- POST /auth/register → Registrar usuario (cliente o chatarrería).
- POST /auth/login → Iniciar sesión y obtener token JWT.

## 2. Usuarios
Gestiona la información de los usuarios.

### Endpoints:

- GET /usuarios/{id} → Obtener perfil de usuario.
- PUT /usuarios/{id} → Actualizar perfil.
- DELETE /usuarios/{id} → Eliminar usuario.
📌 Usuarios pueden ser clientes (quienes venden chatarra) o chatarrerías (compradores).

## 3. Chatarrerías y Materiales (Ubicaciones y Tipos de Residuos Aceptados)
Gestiona chatarrerías y los tipos de residuos que aceptan.

### Endpoints:

- POST /chatarrerias → Registrar chatarrería.
- GET /chatarrerias → Listar todas las chatarrerías.
- PUT /chatarrerias/{id} → Actualizar información.
- DELETE /chatarrerias/{id} → Eliminar chatarrería.
- POST /chatarrerias/{id}/materiales → Agregar tipo de residuo aceptado.
- GET /chatarrerias/{id}/materiales → Listar residuos aceptados.
- DELETE /chatarrerias/{id}/materiales/{idMaterial} → Eliminar residuo aceptado.
📌 Cada chatarrería define qué residuos compra (ejemplo: cobre, aluminio, cartón, plástico reciclable).

## 4. Transacciones (Órdenes de Venta de Chatarra)
Gestiona las ventas de chatarra entre clientes y chatarrerías.

### Endpoints:

- POST /ordenes → Registrar venta de chatarra.
- GET /ordenes → Listar todas las ventas de un usuario.
- GET /ordenes/{id} → Detalles de una orden de venta.
- PUT /ordenes/{id} → Actualizar orden.
- DELETE /ordenes/{id} → Cancelar venta.
📌 Cada venta incluye: usuario vendedor, chatarrería compradora, tipo y cantidad de material vendido, precio total.

## 5. Recolección (Servicio de Recolectores de Chatarra) 
Gestión de recolectores que ofrecen servicio a domicilio para recoger chatarra.

### Endpoints:

- POST /recoleccion → Solicitar recolección.
- GET /recoleccion → Listar solicitudes activas.
- PUT /recoleccion/{id} → Actualizar estado de la recolección.
- DELETE /recoleccion/{id} → Cancelar solicitud.
📌 Si un usuario no puede llevar su chatarra a la chatarrería, puede solicitar un recolector.

# Resumen
✅ Autenticación (Registro y Login)
✅ Usuarios (Perfil y Gestión)
✅ Chatarrerías y Materiales (Ubicaciones y Tipos de Residuos Aceptados)
✅ Transacciones (Órdenes de Venta de Chatarra)
✅ Recolección (útil para servicio a domicilio)
