// Плавна прокрутка меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Прямі посилання на .mp4 файли або локальні шляхи
const playlist = [
  {
    title: "Модельне відео №1",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401050342236300/ssstik.io_1784114742055.mp4?ex=6abfa7ac&is=6abe562c&hm=4cac1cc1555f38929ea5a6df44237ca4497404beeb4b38406b3d3570ea655ef8&"
  },
  {
    title: "Модельне відео №2",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401050895614065/ssstik.io_1784114847685.mp4?ex=6abfa7ad&is=6abe562d&hm=9a7c774b86909243b2a5a0686b4b53fe8f3a03b018de90a6296c799829b77700&"
  },
  {
    title: "Модельне відео №3",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401051579416616/ssstik.io_1784114922391.mp4?ex=6abfa7ad&is=6abe562d&hm=aa7869bd13a028b04b4d15e5593c1ef498f44461ba0c46ea72e91bcf5c3482e7&"
  },
  {
    title: "Модельне відео №4",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1555257067353145458/VID_20260723_000903_948.mp4?backend=b2&ex=6abfdd84&is=6abe8c04&hm=05b8a88d33d2883f74c8d5afc348173539f5bdd1d44569cb1b56bade2d971b6f&"
  },
  {
    title: "Модельне відео №5",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1555257070012342333/ssstik.io_ddianka77_1786477804696.mp4?backend=b2&ex=6abfdd84&is=6abe8c04&hm=43ee255cf5af2b71833b709c6aca135452b139da09185e4abb64855419f8d3c8&"
  },
  {
    title: "Модельне відео №6",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1555257071509704804/VID_20260813_014713_209.mp4?backend=b2&ex=6abfdd85&is=6abe8c05&hm=2b69de3ee57d186835a25dd3fd8fa99ac3a740a2a3c50fc016d23612a4682b4b&"
  },
  {
    title: "Модельне відео №7",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1555257070528372776/VID_20260811_224411_892.mp4.mp4?backend=b2&ex=6abfdd84&is=6abe8c04&hm=03a7a07ea822197daf023fdcb6f4516868b64b5f120d8fb917ac86bed3fe46dd&"
  },
  {
    title: "Модельне відео №8",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1555257127021449268/VID_20260920_172222_036.mp4.mp4?backend=b2&ex=6abfdd92&is=6abe8c12&hm=54b9857ee509e587f51b985f76147d61fe7f1eba5021ce83caa88187f07fcc3b&"
  },
  {
    title: "Модельне відео №9",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1566535443040702576/7702907653734796576uasaverbot.mp4?ex=6ae8e552&is=6ae793d2&hm=2b547f1e8a96e55c8fc6f84fde758b3308780e736daf58af4341df261c79623e&"
  },
];

let currentIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoCounter = document.getElementById('videoCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadVideo(index) {
  const currentVideo = playlist[index];
  videoPlayer.src = currentVideo.src;
  videoPlayer.load();
  videoTitle.textContent = currentVideo.title;
  videoCounter.textContent = `Відео ${index + 1} з ${playlist.length}`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideo(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadVideo(currentIndex);
});

// Завантаження першого відео
loadVideo(currentIndex);