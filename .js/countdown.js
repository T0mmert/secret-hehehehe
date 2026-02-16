// Set the anniversary date
const anniversaryDate = new Date('2026-02-04T00:00:00');

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = anniversaryDate - now;

  if(diff <= 0){
    window.location.href = 'index.html';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
