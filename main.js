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
    title: "Вертикальне відео 1",
    src: "video_2026-09-15_14-34-09.mp4"
  },
  {
    title: "Вертикальне відео 2",
    src: "video_2026-09-15_14-33-54.mp4"
  },
  {
    title: "Вертикальне відео 3",
    src: "video_2026-09-15_14-38-41.mp4"
  },
  {
    title: "Вертикальне відео 4",
    src: "video_2026-09-15_14-18-54.mp4"
  },
  {
    title: "Вертикальне відео 5",
    src: "video_2026-09-15_14-00-14.mp4"
  },
  {
    title: "Вертикальне відео 6",
    src: "video_2026-09-15_14-12-45.mp4"
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
