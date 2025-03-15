# Casos de uso de la solucion
## 1. Autenticación
Gestiona el registro y autenticación de usuarios.

### Casos de uso:
- **Registrar usuario**: Crear una cuenta de usuario.
- **Iniciar sesión**: Autenticar usuario y obtener token JWT.
- **Cerrar sesión**: Finalizar la sesión actual.

## 2. Usuarios
Gestiona la información de los usuarios.

### Casos de uso:
- **Crear perfil de usuario**: Crear un perfil de usuario.
- **Ver perfil**: Consultar información del usuario.
- **Actualizar perfil**: Modificar información del usuario.
- **Eliminar cuenta**: Eliminar la cuenta de usuario.

## 3. Chatarrerías y Materiales
Gestiona chatarrerías y los tipos de residuos que aceptan.

### Casos de uso:
- **Registrar chatarrería**: Crear un perfil de chatarrería.
- **Listar chatarrerías**: Consultar información de todas las chatarrerías.
- **Actualizar información**: Modificar información de la chatarrería.
- **Eliminar chatarrería**: Eliminar el perfil de chatarrería.
- **Agregar residuo aceptado**: Registrar un tipo de residuo aceptado.
- **Listar residuos aceptados**: Consultar información de los residuos aceptados.
- **Eliminar residuo aceptado**: Eliminar un residuo aceptado.
📌 Cada chatarrería define qué residuos compra (ejemplo: cobre, aluminio, plástico reciclable).

## 4. Transacciones
Gestiona las ventas de chatarra entre clientes y chatarrerías.

### Casos de uso:
- **Registrar venta**: Crear una orden
- **Listar ventas**: Consultar información de todas las ventas de un usuario.
- **Ver detalles de venta**: Consultar información detallada de una venta.
- **Actualizar venta**: Modificar información de una venta.
- **Cancelar venta**: Eliminar una venta.
- **Ver historial de ventas**: Consultar historial de ventas realizadas.
- **Ver historial de compras**: Consultar historial de compras realizadas.
📌 Cada venta incluye: usuario vendedor, chatarrería compradora, tipo y cantidad de material vendido, precio total.