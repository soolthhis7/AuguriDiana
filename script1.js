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
    src: "ssstik.io_1784114742055.mp4"
  },
  {
    title: "Модельне відео №2",
    src: "ssstik.io_1784114847685.mp4"
  },
  {
    title: "Модельне відео №3",
    src: "ssstik.io_1784114922391.mp4"
  },
  {
    title: "Модельне відео №4",
    src: "ssstik.io_1784573995652.mp4"
  },
  {
    title: "Модельне відео №5",
    src: "ssstik.io_1784587886752.mp4"
  },
  {
    title: "Модельне відео №6",
    src: "ssstik.io_1784753673486.mp4"
  },
  {
    title: "Модельне відео №7",
    src: "VID_20260723_000903_948.mp4"
  },
  {
    title: "Модельне відео №8",
    src: "ssstik.io_@ddianka77_1786477804696.mp4"
  },
  {
    title: "Модельне відео №9",
    src: "VID_20260813_014713_209.mp4"
  },
  {
    title: "Модельне відео №10",
    src: "VID_20260819_010926_215.mp4"
  },
  {
    title: "Модельне відео №11",
    src: "VID_20260819_010929_645.mp4"
  },
  {
    title: "Модельне відео №12",
    src: "VID_20261107_151628_021.mp4"
  },
  {
    title: "Модельне відео №13",
    src: "VID_20260928_220426_879.mp4"
  },
  {
    title: "Модельне відео №14",
    title: "Моє найулюбленіше <3",
    src: "7702907653734796576@uasaverbot.mp4"
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
