function updateYear() {
            var currentYear = new Date().getFullYear();
            document.getElementById('current-year').textContent = currentYear;
        }
        
        window.onload = updateYear;
