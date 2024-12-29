// retorna o status offline
function updateOnlineStatus() {
  const offlineNotice = document.getElementById('offline-notice');
  if (!navigator.onLine) {
    offlineNotice.style.display = 'block';
  } else {
    offlineNotice.style.display = 'none';
  }
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();
