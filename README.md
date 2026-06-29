Módulo de Soporte Técnico - Arquitectura de 3 Capas

1. Objetivo de la Actividad
Esta solución simple se construyó aplicando el modelo de 3 capas:
(1) capa de presentación
(2) capa de negocio
(3) capa de datos.
El objetivo principal es comprender la separación de responsabilidades
y demostrar el flujo completo desde un formulario (presentación) hacia el backend,
la persistencia en base de datos y la respuesta al usuario.
Para el desarrollo del servidor se utilizó Node.js y Express.
Con esto se integra y demuestra exitosamente el flujo completo:
Formulario → Backend → Base de datos → Respuesta.

3. Estructura de Carpetas
La estructura ordenada por carpetas del repositorio en GitHub separa las responsabilidades del sistema:

actividad-2-2-soporte/
-public/                    
      contacto.html           
      js/
           main.js             

-src/                        
      controllers/            
           ticketController.js 
      routes/                 
           ticketRoutes.js     
      data/                  
           db.js               
           ticketDAO.js        

-.env                       
-.gitignore                 
-package.json                
-server.js
      
-README.md


 3. Objetivo de la Actividad
(1) instalar dependecias del proyecto
    npm install
(2) configurar bse de datos en MYSQL
    CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(255) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
(3) Configurar variables de entorno
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=tienda_suplementos

(4) Ejecutar el servidor principal
    node server.js
