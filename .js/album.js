const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const heartsContainer = document.getElementById('heartsContainer');

function openLightbox(img) {
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;

  createHearts();
}

function closeLightbox() {
  lightbox.style.display = 'none';
  heartsContainer.innerHTML = '';
}

// Create floating hearts
function createHearts() {
  for(let i=0; i<10; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 80 + '%';
    heart.style.animationDuration = (2 + Math.random() * 2) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

// Swipe support for mobile
let startX = 0;

lightboxImg.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

lightboxImg.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    navigatePhoto(-1); // swipe right
  } else if (startX - endX > 50) {
    navigatePhoto(1); // swipe left
  }
});

let currentIndex = 0;
const images = Array.from(document.querySelectorAll('.gallery img'));

function navigatePhoto(direction) {
  currentIndex = images.findIndex(img => img.src === lightboxImg.src);
  currentIndex += direction;
  if(currentIndex < 0) currentIndex = images.length -1;
  if(currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
  createHearts();
}
