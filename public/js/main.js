document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('soporteForm');
    const divRespuesta = document.getElementById('respuesta');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const payload = {
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            asunto: document.getElementById('asunto').value
        };

        try {
            const res = await fetch('/api/tickets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            divRespuesta.style.display = 'block';

            if (res.ok) {
                divRespuesta.style.background = '#d4edda';
                divRespuesta.style.color = '#155724';
                divRespuesta.innerText = data.mensaje;
                form.reset();
            } else {
                divRespuesta.style.background = '#f8d7da';
                divRespuesta.style.color = '#721c24';
                divRespuesta.innerText = data.mensaje;
            }
        } catch (error) {
            alert('Error crítico: No se pudo contactar al servidor backend.');
        }
    });
});