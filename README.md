# MANUAL TÉCNICO

## Información General

**Geffry Alejandro Ospina Atehortua**  

**DOCENTE**  
ANDRÉS FELIPE GONZÁLEZ OROZCO

**MATERIA**  
PROYECTO INTEGRADOR

**INSTITUCIÓN**  
POLITECNICO JAIME ISAZA CADAVID FACULTAD DE INGENIERÍA

**MEDELLÍN 2025-1**

## Tabla de contenido
1. [Presentación](#presentación)
2. [Objetivo](#objetivo)
3. [Procesos](#procesos)
4. [Requisitos del sistema](#requisitos-del-sistema)
5. [Herramientas utilizadas para el desarrollo](#herramientas-utilizadas-para-el-desarrollo)
6. [Instalación de aplicaciones](#instalación-de-aplicaciones)
7. [Modelo de clases](#modelo-de-clases)
8. [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
9. [Diagrama entidad relación](#diagrama-entidad-relación)
10. [Diccionario de datos](#diccionario-de-datos)

## Presentación
El sistema de gestión de chatarrerías es una plataforma web que permite la interacción entre usuarios (vendedores de chatarra) y chatarrerías (compradores). La plataforma facilita la gestión de transacciones de materiales reciclables, permitiendo a los usuarios registrar ventas, solicitar servicios de recolección y gestionar sus perfiles. Este manual técnico documenta la estructura del servicio web de la aplicación mediante una arquitectura de microservicios REST-FUL API.

## Objetivo
Presentar la estructura del servicio web de la aplicación de gestión de chatarrerías, implementando el paradigma REST-FUL API a través de una arquitectura de microservicios, documentando todas las funcionalidades y consultas disponibles en la aplicación.

## Procesos

### Procesos de entrada:

#### Aplicativo web (acceso desde computador, tablet o celular)
- Ingreso a la aplicación mediante Login
- Registro de usuarios (clientes o chatarrerías)
- Gestión de perfiles de usuario
- Gestión de contraseñas
- Registro y gestión de chatarrerías
- Registro y gestión de materiales aceptados
- Gestión de órdenes de venta
- Gestión de solicitudes de recolección

#### Postman
- Autenticación y registro de usuarios
- Gestión de perfiles de usuario
- Gestión de chatarrerías y materiales
- Gestión de órdenes de venta
- Gestión de solicitudes de recolección

### Procesos de salida:

#### Aplicativo web
- Consulta de perfiles de usuario
- Consulta de chatarrerías disponibles
- Consulta de materiales aceptados
- Consulta de órdenes de venta
- Consulta de solicitudes de recolección

#### Postman
- Consulta de perfiles de usuario
- Consulta de chatarrerías disponibles
- Consulta de materiales aceptados
- Consulta de órdenes de venta
- Consulta de solicitudes de recolección

## Requisitos del sistema

### Requisitos de hardware:
- Conexión a internet
- Computador, tablet o celular

### Requisitos de software:
- Navegadores web modernos (Google Chrome, Firefox, Edge)
- Node.js
- MySQL
- Visual Studio Code (recomendado)

## Herramientas utilizadas para el desarrollo

1. **Node.js** - Entorno de ejecución para JavaScript
2. **Express.js** - Framework web para Node.js
3. **MySQL** - Sistema de gestión de base de datos
4. **JWT** - Gestión de autenticación
5. **HTML5 y JavaScript** - Desarrollo frontend

## Instalación de aplicaciones

1. **Node.js**
   - Descargar e instalar desde [nodejs.org](https://nodejs.org)
   - Versión recomendada: LTS

2. **Visual Studio Code**
   - Descargar e instalar desde [code.visualstudio.com](https://code.visualstudio.com)

3. **MySQL**
   - Descargar e instalar desde [mysql.com](https://mysql.com)
   - Instalar MySQL Workbench para gestión de base de datos

## Modelo de clases

La aplicación está estructurada en microservicios:

1. **Microservicio de Autenticación**
   - Gestión de registro y login de usuarios
   - Manejo de tokens JWT

2. **Microservicio de Usuarios**
   - Gestión de perfiles de usuario
   - Clasificación de usuarios (clientes/chatarrerías)

3. **Microservicio de Chatarrerías**
   - Gestión de información de chatarrerías
   - Gestión de materiales aceptados

4. **Microservicio de Transacciones**
   - Gestión de órdenes de venta
   - Gestión de solicitudes de recolección

## Diagrama de casos de uso

### Casos de uso principales:

1. **Gestión de Usuarios**
   - Actor: Usuario (Cliente/Chatarrería)
   - Descripción: Registro, login y gestión de perfil de usuario

2. **Gestión de Chatarrerías**
   - Actor: Chatarrería
   - Descripción: Registro y gestión de información de chatarrería

3. **Gestión de Materiales**
   - Actor: Chatarrería
   - Descripción: Gestión de tipos de materiales aceptados

4. **Gestión de Órdenes**
   - Actor: Usuario/Chatarrería
   - Descripción: Creación y gestión de órdenes de venta

5. **Gestión de Recolección**
   - Actor: Usuario
   - Descripción: Solicitud y gestión de servicios de recolección

## Diagrama entidad relación

La base de datos está compuesta por las siguientes entidades principales:

1. **Usuarios**
   - Clientes
   - Chatarrerías

2. **Materiales**
   - Tipos de materiales
   - Precios

3. **Órdenes**
   - Detalles de venta
   - Estados

4. **Recolección**
   - Solicitudes
   - Estados

## Diccionario de datos

### Tabla: Usuarios
- id: INT (PK)
- nombre: VARCHAR(100)
- email: VARCHAR(100)
- password: VARCHAR(255)
- tipo: ENUM('cliente', 'chatarreria')
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

### Tabla: Chatarrerias
- id: INT (PK)
- usuario_id: INT (FK)
- nombre: VARCHAR(100)
- direccion: VARCHAR(255)
- telefono: VARCHAR(20)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

### Tabla: Materiales
- id: INT (PK)
- nombre: VARCHAR(100)
- descripcion: TEXT
- precio_kg: DECIMAL(10,2)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

### Tabla: Ordenes
- id: INT (PK)
- usuario_id: INT (FK)
- chatarreria_id: INT (FK)
- material_id: INT (FK)
- cantidad: DECIMAL(10,2)
- precio_total: DECIMAL(10,2)
- estado: ENUM('pendiente', 'completada', 'cancelada')
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

### Tabla: Recoleccion
- id: INT (PK)
- usuario_id: INT (FK)
- direccion: VARCHAR(255)
- fecha_solicitud: DATETIME
- estado: ENUM('pendiente', 'asignada', 'completada', 'cancelada')
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
