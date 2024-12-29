    function updateStatus() {
        const statusDiv = document.getElementById('status');
        if (navigator.onLine) {
            print("Usuário online!");
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
