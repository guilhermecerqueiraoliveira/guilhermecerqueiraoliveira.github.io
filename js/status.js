    function updateStatus() {
        const statusDiv = document.getElementById('status');
        if (navigator.onLine) {
            statusDiv.textContent = 'Você está online!';
            statusDiv.className = 'online';
        } else {
            statusDiv.textContent = 'Você está offline!';
            statusDiv.className = 'offline';
        }
        statusDiv.style.display = 'block';
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 3000); // Esconde o aviso após 3 segundos
    }

    // Eventos para monitorar mudanças de status
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    // Atualiza o status ao carregar a página
    updateStatus();
