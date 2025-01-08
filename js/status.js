// Autor: José Guilherme Cerqueira de Oliveira    
    function updateStatus() {
        const statusDiv = document.getElementById('status');
        if (navigator.onLine) {
            console.log("você está online!");
        } else {
            statusDiv.textContent = 'Você está offline!';
            statusDiv.className = 'offline';
        }
        statusDiv.style.display = 'block';
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    updateStatus();
