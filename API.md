# Dominios:

## 1. Usuarios y Autenticación (Login, Clientes y Chatarrerías) [Incluye JWT]
Gestiona a los clientes y las chatarrerías, incluyendo autenticación.

### Endpoints:

- POST /auth/register → Registrar usuario (cliente o chatarrería).
- POST /auth/login → Iniciar sesión y obtener token JWT.
- GET /usuarios/{id} → Obtener perfil de usuario.
- PUT /usuarios/{id} → Actualizar perfil.
- DELETE /usuarios/{id} → Eliminar usuario.
📌 Usuarios pueden ser clientes (quienes venden chatarra) o chatarrerías (compradores).

## 2. Chatarrerías y Materiales (Ubicaciones y Tipos de Residuos Aceptados)
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

## 3. Transacciones (Órdenes de Venta de Chatarra)
Gestiona las ventas de chatarra entre clientes y chatarrerías.

### Endpoints:

- POST /ordenes → Registrar venta de chatarra.
- GET /ordenes → Listar todas las ventas de un usuario.
- GET /ordenes/{id} → Detalles de una orden de venta.
- PUT /ordenes/{id} → Actualizar orden.
- DELETE /ordenes/{id} → Cancelar venta.
📌 Cada venta incluye: usuario vendedor, chatarrería compradora, tipo y cantidad de material vendido, precio total.

## 4. Recolección (Servicio de Recolectores de Chatarra) 
Gestión de recolectores que ofrecen servicio a domicilio para recoger chatarra.

### Endpoints:

- POST /recoleccion → Solicitar recolección.
- GET /recoleccion → Listar solicitudes activas.
- PUT /recoleccion/{id} → Actualizar estado de la recolección.
- DELETE /recoleccion/{id} → Cancelar solicitud.
📌 Si un usuario no puede llevar su chatarra a la chatarrería, puede solicitar un recolector.

# Resumen
✅ Usuarios y Autenticación (Login incluido, Clientes y Chatarrerías)
✅ Chatarrerías y Materiales (Ubicaciones y Tipos de Residuos Aceptados)
✅ Transacciones (Órdenes de Venta de Chatarra)
✅ Recolección (útil para servicio a domicilio)
