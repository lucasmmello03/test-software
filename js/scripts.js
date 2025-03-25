// Contagem regressiva
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    let count = 3;
    const interval = setInterval(() => {
      countdownElement.textContent = count;
      count--;
      if (count < 0) {
        clearInterval(interval);
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('page1').classList.remove('hidden');
      }
    }, 1000);
  }
  
  // Efeito de digitação
  function typeWriter(text, element, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  // Iniciar contagem regressiva e digitação
  startCountdown();
  typeWriter("Tem algo especial pra você aqui!", document.getElementById('typed-text'), 100);
  
  // Navegação entre páginas
  function showPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
  }
  
  function confirmYes() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
  }
  
  function acceptProposal() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
  
    startCelebration();
    playMusic();
    confetti(); // Efeito de confetes
    startFireworks(); // Efeito de fogo de artifício
  }
  
  // Reproduzir música
  function playMusic() {
    const audioElement = document.getElementById('djavan-audio');
    audioElement.play();
  }
  
  // Efeito de fogo de artifício
  function startFireworks() {
    const container = document.querySelector('body');
    const fireworks = new Fireworks(container, {
      speed: 3,
      acceleration: 1.05,
      friction: 0.98,
      gravity: 1,
      particles: 100,
      explosion: 10,
    });
    fireworks.start();
  }
  
  // Corações e fotos subindo
  function startCelebration() {
  // Corações subindo continuamente
  setInterval(() => {
    createHeart();
  }, 500);

  // Fotos subindo continuamente
  const photoFiles = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg', 'assets/img5.jpg', 'assets/img6.jpg'];
  setInterval(() => {
    const randomPhoto = photoFiles[Math.floor(Math.random() * photoFiles.length)];
    createPhoto(randomPhoto);
  }, 2000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 5) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

function createPhoto(src) {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('photo');
  img.style.left = Math.random() * 80 + 'vw';

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 8000);
}

// Abrir a mini cartinha
function openCartinha() {
  document.getElementById('cartinha').classList.remove('hidden');
  document.getElementById('overlay').classList.add('active');
}

// Fechar a mini cartinha
function closeCartinha() {
  document.getElementById('cartinha').classList.add('hidden');
  document.getElementById('overlay').classList.remove('active');
}