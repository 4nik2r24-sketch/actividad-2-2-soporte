const pool = require('./db');

async function insertarTicket(ticket) {
    const query = 'INSERT INTO tickets (nombre, correo, asunto) VALUES (?, ?, ?)';
    const [rows] = await pool.execute(query, [ticket.nombre, ticket.correo, ticket.asunto]);
    return rows;
}

async function obtenerTickets() {
    const query = 'SELECT * FROM tickets ORDER BY fecha DESC';
    const [rows] = await pool.query(query);
    return rows;
}

module.exports = { insertarTicket, obtenerTickets };