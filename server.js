const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ticketRoutes = require('./src/routes/ticketRoutes');
const pool = require('./src/data/db'); // <-- Importamos la base de datos aquí mismo

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/tickets', ticketRoutes);

app.listen(PORT, async () => {
    console.log(`Servidor de soporte listo en http://localhost:${PORT}/contacto.html`);
    
    // TEST DE FUERZA A LA BASE DE DATOS EN EL MINUTO CERO:
    try {
        const conexion = await pool.getConnection();
        console.log(' [OK] Conexión con MySQL (tienda_suplementos) verificada y operativa.');
        conexion.release();
    } catch (error) {
        console.log('\n=================== FALLO DE BASE DE DATOS ===================');
        console.log('Razón exacta del rechazo:', error.message);
        console.log('Código de error MySQL:', error.code);
        console.log('==============================================================\n');
    }
});