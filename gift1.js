// Ефект поцілуйчиків
function createKissEffect() {
  const count = 24;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'kiss-particle';
      
      const isText = Math.random() < 0.25;
      if (isText) {
        particle.innerText = 'З днем народження, дорога Діано! 💋';
        particle.style.fontSize = (0.85 + Math.random() * 0.4) + 'rem';
        particle.style.fontWeight = '600';
        particle.style.color = '#fb7185';
        particle.style.whiteSpace = 'nowrap';
        particle.style.textShadow = '0 0 10px rgba(244, 63, 94, 0.6)';
      } else {
        const emojis = ['💋', '😘', '❤️', '💖', '✨'];
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
      }

      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2 + 50;

      particle.style.left = startX + 'px';
      particle.style.top = startY + 'px';

      const dx = (Math.random() - 0.5) * 550 + 'px';
      const dy = -(Math.random() * 420 + 150) + 'px';
      const rot = (Math.random() - 0.5) * 60 + 'deg';

      particle.style.setProperty('--dx', dx);
      particle.style.setProperty('--dy', dy);
      particle.style.setProperty('--rot', rot);

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 2500);
    }, i * 80);
  }
} 