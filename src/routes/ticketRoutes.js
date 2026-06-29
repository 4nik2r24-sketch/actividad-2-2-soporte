const express = require('express');
const router = express.Router();
const { crearTicket, listarTickets } = require('../controllers/ticketController');

router.post('/', crearTicket);
router.get('/', listarTickets);

module.exports = router;