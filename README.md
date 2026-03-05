<div align="center">
  <h1>🚪 DoorMast | Premium Landing Page</h1>
  <p><b>Профессиональный лендинг сервиса по установке дверей с онлайн-калькулятором, фокусом на конверсию и чистым кодом (Zero Dependency).</b></p>

  <div>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3_(Glassmorphism)-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Security_(Honeypot)-8A2BE2?style=for-the-badge&logo=security&logoColor=white" alt="Security" />
  </div>
</div>

---

## 💻 Визуальный интерфейс

<div align="center">
  <b>🖥 Десктопная версия (Browser View)</b><br><br>
  <img src="https://github.com/user-attachments/assets/21ff121c-4526-461c-833d-2e5d7a80bb4a" width="900" />
</div>

<br>

</table>

---

## ✨ Основной функционал

Проект решает главную проблему бизнеса: обеспечение стабильного потока целевых заявок за счет прозрачности и удобства для пользователя.

* 🧮 **Динамический онлайн-калькулятор:** Мгновенный пересчет стоимости на основе типа двери (`data-price`), количества и опции "срочности".
* 📞 **Smart Format (UX):** Автоматическая маска при вводе телефона `+7 (999) 000-00-00` реализована на нативном JS без тяжелых плагинов.
* 🛡️ **Защита от спама:** Интегрированное невидимое поле `bot_field` (Honeypot) блокирует автоматические отправки ботами без ущерба для пользовательского опыта.
* 🚀 **Экстремальная оптимизация:** Ленивая загрузка изображений (`loading="lazy"`), минимизация repaint-ов, полный отказ от jQuery и Bootstrap.
* 📱 **Mobile-First:** Полноценное выдвижное меню (off-canvas) и плавающая кнопка быстрого звонка для мобильных пользователей.

---

## 🛠 Стек технологий и Архитектура

Проект организован с четким разделением ответственности (Separation of Concerns):

* **HTML5:** Семантическая верстка для обеспечения доступности (a11y) и SEO.
* **CSS3:** Использование CSS Variables для архитектуры слоев (z-index) и цветовой палитры, Flexbox/Grid, современные визуальные эффекты (Glassmorphism, backdrop-filter).
* **Vanilla JS:** Плавная прокрутка, логика многошагового калькулятора, перехват и валидация форм.

<details>
<summary><b>📂 Посмотреть структуру проекта</b></summary>
<br>

```text
/
├── assets/
│   ├── css/
│   │   └── style.css       # Глобальные стили, переменные, UI-кит
│   ├── js/
│   │   └── script.js       # Логика калькулятора, UI-взаимодействия
│   └── images/
│       └── hero.png        # Оптимизированные изображения
├── index.html              # Главная разметка и бизнес-логика (data-атрибуты)
└── README.md               # Документация проекта
```
</details>

---

## 🚀 Инструкция по запуску

Проект написан на чистом HTML/CSS/JS (Zero Dependency), поэтому для его запуска не требуются сборщики вроде Webpack или Vite.

1. Склонируйте репозиторий:
```bash
git clone https://github.com/m1sstak3/doormast-landing.git
cd doormast-landing
```
2. Откройте файл `index.html` в любом современном браузере.

*(💡 Для комфортной разработки рекомендуется использовать расширение **Live Server** в VS Code для автоматической перезагрузки страницы).*

---

## 📈 Возможности масштабирования (Roadmap)

- [ ] **Интеграция с API:** Подключение Telegram API или CRM (Bitrix24/AmoCRM) для автоматической передачи лидов.
- [ ] **Сборка (Bundling):** Внедрение Webpack или Vite для минификации скриптов, обработки SCSS и оптимизации финального бандла.
- [ ] **SEO & Многостраничность:** Добавление отдельных страниц для каждой услуги для кластеризации SEO-запросов.

---

<div align="center">
  <b>Developed with ❤️ by m1sstak3</b>
</div>
