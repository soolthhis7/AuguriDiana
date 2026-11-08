// zaxid.js — Сповіщення про візит на сайт у Telegram

const BOT_TOKEN = '8990094605:AAHF_uIOLIr7GARwYHKWLxJIopp2a72R1Qs';
const CHAT_ID = '2122371486';

async function sendVisitNotification() {
    // Перевіряємо, чи вже було надіслано сповіщення протягом цієї сесії
    if (sessionStorage.getItem('visit_notified')) {
        return;
    }

    const pageUrl = window.location.href;
    const userAgent = navigator.userAgent;
    const visitTime = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' });

    const message = `🚨 <b>Новий візит на сайт!</b>\n\n` +
                    `🔗 <b>Посилання:</b> ${pageUrl}\n` +
                    `⏰ <b>Час:</b> ${visitTime}\n` +
                    `📱 <b>Пристрій:</b> <code>${userAgent}</code>`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            sessionStorage.setItem('visit_notified', 'true');
        } else {
            console.error('Помилка відправки в Telegram:', response.statusText);
        }
    } catch (error) {
        console.error('Помилка мережі при спробі відправити сповіщення:', error);
    }
}

// Запускаємо відправку після завантаження DOM
document.addEventListener('DOMContentLoaded', sendVisitNotification);