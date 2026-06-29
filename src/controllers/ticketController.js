const { insertarTicket, obtenerTickets } = require('../data/ticketDAO');

async function crearTicket(req, res) {
    try {
        const { nombre, correo, asunto } = req.body;

        if (!nombre || !correo || !asunto) {
            return res.status(400).json({ exito: false, mensaje: 'Todos los campos son obligatorios.' });
        }

        const nuevoTicket = {
            nombre: nombre.trim(),
            correo: correo.trim().toLowerCase(),
            asunto: asunto.trim()
        };

        await insertarTicket(nuevoTicket);

        res.status(201).json({ 
            exito: true, 
            mensaje: 'Ticket de soporte registrado correctamente en el sistema.' 
        });

    } catch (error) {
        console.error('Error interno:', error);
        res.status(500).json({ exito: false, mensaje: 'Error interno en el servidor.' });
    }
}

async function listarTickets(req, res) {
    try {
        const tickets = await obtenerTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener tickets.' });
    }
}

module.exports = { crearTicket, listarTickets };