# proyecto-soa

## Nombre del Proyecto:
EcoChatarrería - Plataforma de Venta y Recolección de Residuos Metálicos

##  Contexto de Funcionamiento:
La aplicación facilitará la venta y recolección de chatarra mediante un sistema que conecte a los usuarios con chatarrerías cercanas. Los usuarios podrán buscar lugares donde vender sus residuos y las chatarrerías podrán gestionar su inventario y solicitar recolectores cuando sea necesario.

## Casos de uso

1. Registro y Autenticación de Usuarios
    Descripción: Permite a los usuarios (vendedores, chatarrerías y recolectores) registrarse e iniciar sesión en la plataforma.
    Actores: Usuario (vendedor, chatarrería, recolector), API de autenticación
    Flujo Principal:
        - El usuario ingresa sus datos en el formulario de registro.
        - La API valida los datos y almacena la información en la base de datos.
        - El usuario recibe un token JWT tras autenticarse.
        - El usuario usa el token para acceder a otros servicios de la API.


2. Publicación de Residuos Metálicos
    Descripción: Permite que los usuarios (vendedores) publiquen los residuos metálicos que desean vender.
    Actores: Vendedor, API de residuos
    Flujo Principal:
        - El usuario accede a la aplicación y selecciona "Publicar Residuo".
        - Ingresa detalles del residuo (tipo, peso, ubicación, precio sugerido, fotos).
        - La API almacena la información en la base de datos y la hace visible para las chatarrerías.
        - Las chatarrerías pueden ver las publicaciones y hacer ofertas.

3. Gestión de Inventario de Chatarrerías
    Descripción: Permite a las chatarrerías administrar su inventario de residuos adquiridos.
    Actores: Chatarrería, API de inventario
    Flujo Principal:
        - La chatarrería visualiza los residuos adquiridos.
        - Puede actualizar la cantidad disponible, eliminar registros o agregar nuevos residuos.
        - La API actualiza la información en la base de datos.

4. Solicitud de Recolectores
    Descripción: Permite a las chatarrerías solicitar recolectores para recoger residuos de los vendedores.
    Actores: Chatarrería, Recolector, API de recolección
    Flujo Principal:
        - La chatarrería ingresa una solicitud con los detalles del residuo y la ubicación del vendedor.
        - La API notifica a los recolectores cercanos.
        - Un recolector acepta la solicitud.
        - La API registra el estado de la solicitud hasta su finalización.

# Condiciones
 
1.  Para considerar que la API se desarrolló con base en las características de una Arquitectura SOA; debe contar con:
    1. Un contexto de funcionamiento de la API, es decir, cuál es el tema o necesidad funcional que soluciona la API.
    2. Los métodos CRUD de operación, es decir que mínimo deben desarrollar 4 APIs.
 
2. Debe contar con acceso (CRUD) a información almacenada en una Base de Datos que puede ser:
    1. Relacional (RDS).
    2. No Relacional.
    3. Puede utilizar cualquier Motor o Gestor de Bases de Datos.
    4. Puede ser local o estar alojada en cualquier nube.
 
3. Deben desarrollar un formulario, que permita la captura de la información a ser gestionada por las APIs.
 
4. La API, debe contar con autenticación por medio del uso de JWT.
 
5. Para poder probar el funcionamiento y consumo externo de las APIs, deben incluir el uso de POSTMAN (tengan en cuenta que algunas de las palabras del CRUD, cambian al trabajar con los métodos en Postman).
 
6. El trabajo lo deben desarrollar en los grupos, ya conformados.
 
7. Esta actividad tiene un valor del 25% y equivale al Parcial #2.
 
8. La fecha de entrega de las APIs, serían los días Vie-23-Mayo-2025 al Vie-20-Junio-2025; si algún grupo termina antes el trabajo final y lo quiere presentar (acordamos la fecha de sustentación), le doy bonificación por entrega adelantada.
 
9. Deben entregar el Manual Técnico con la documentación respectiva a la aplicación (adjunto envío un manual de ejemplo: "Computación Orientada a Servicios_EJEMPLO_Manual Técnico_APIS_(Nombre Aplicación).docx").

# Definiciones 
- [Definición de la API](./API.md)
- [Definición de la Diseño de la Solución](./SOLUTION_DESIGN.md)
