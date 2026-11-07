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
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549383000200847360/video_2026-09-15_14-34-09.mp4?ex=6acf68dd&is=6ace175d&hm=0cbe0c703c2376ba2cf57cf2e26f604b8ea9da113d2690dd54efdb06fb412c5a&"
  },
  {
    title: "Вертикальне відео 2",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549382797641121893/video_2026-09-15_14-33-54.mp4?ex=6acf68ad&is=6ace172d&hm=732f72fcf9e011a8f249e4a91691513c77c7fe3bc092571922e15e8ac897c38a&"
  },
  {
    title: "Вертикальне відео 3",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549379045551112313/video_2026-09-15_14-18-54.mp4?ex=6acf652e&is=6ace13ae&hm=c9aa31328012f0ef966b6c03642394f9bc794d91572ee223fee676a93503d90a&"
  },
  {
    title: "Вертикальне відео 4",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549384009107382332/video_2026-09-15_14-38-41.mp4?ex=6acf69cd&is=6ace184d&hm=eb2e66b8ea8c4c6685038fe41d4ec28ff3e03b408346183479f5fdffa954912e&"
  },
  {
    title: "Вертикальне відео 5",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549376884498759731/video_2026-09-15_14-00-14.mp4?ex=6acf632b&is=6ace11ab&hm=e1e81503a15593c36218a805c8210f6b7d0cd44ac11fe5643e736903ef23a73b&"
  },
  {
    title: "Вертикальне відео 6",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549377491897155654/video_2026-09-15_14-12-45.mp4?ex=6acf63bc&is=6ace123c&hm=4ecd2e1b6a943286dcc9ec48706bcd3f09a738b0c8a21eee8d4898eba9c52c43&"
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