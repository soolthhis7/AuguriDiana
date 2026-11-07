document.addEventListener('DOMContentLoaded', () => {
  // Впишіть сюди токен вашого бота від BotFather
  const BOT_TOKEN = '8990094605:AAHF_uIOLIr7GARwYHKWLxJIopp2a72R1Qs';
  // Впишіть сюди ваш числовий Telegram ID (який ви дізналися через @userinfobot)
  const ADMIN_CHAT_ID = '2122371486'; 

  const giftCards = document.querySelectorAll('.gift-card');
  const resultModal = document.getElementById('result-modal');
  const giftText = document.getElementById('gift-text');
  const resetBtn = document.getElementById('reset-btn');

  giftCards.forEach((card) => {
    card.addEventListener('click', () => {
      const prize = card.getAttribute('data-gift');
      
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Текст повідомлення, яке прилетить вам у бота
      const messageText = `🎁 Хтось обрав подарунок у браузері!\n\n📦 Подарунок: *${prize}*\n⏰ Час: ${timeString}`;

      // Відправляємо HTTP-запит напряму на сервер Telegram Bot API
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      
      const payload = {
        chat_id: ADMIN_CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown'
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          console.log("Повідомлення успішно відправлено в бота!");
        } else {
          console.error("Помилка відправки:", data);
        }
      })
      .catch(error => {
        console.error("Помилка мережі:", error);
      });

      // Показуємо модальне вікно на сайті
      giftText.textContent = prize;
      resultModal.classList.remove('hidden');
    });
  });

  resetBtn.addEventListener('click', () => {
    resultModal.classList.add('hidden');
  });

  resultModal.addEventListener('click', (e) => {
    if (e.target === resultModal) {
      resultModal.classList.add('hidden');
    }
  });
});