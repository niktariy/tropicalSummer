# Tropical Summer - Event website Hero Section

**Адаптивная веб-страница с динамической сменой темы в зависимости от времени суток.**

*Responsive web page that changes theme colors depending on the time of the day.*

🔗 [Demo](https://niktariy.github.io/tropicalSummer/)

---

## О проекте / About the Project

**Русский:**
Проект создан по вдохновению от дизайна [Divan Raj](https://dribbble.com/divanraj) и реализует адаптивную веб-страницу, которая автоматически меняет цветовую палитру в зависимости от времени суток: утро, день, вечер.

**English:**
The project was inspired by the design of [Divan Raj](https://dribbble.com/divanraj) and implements a responsive web page that automatically changes its color palette depending on the time of day: morning, day, evening.

| <a href="https://dribbble.com/shots/3873826-Event-website-header" target="_blank"><img src="https://cdn.dribbble.com/userupload/41935546/file/original-0ab7a9ba13f55a134f09e98f41e6ab72.png?resize=800x600&vertical=center" alt="Desctop design - pink variant" width="500"/></a> | <a href="https://dribbble.com/shots/3876556-Event-website-headers-v2" target="_blank"><img src="https://cdn.dribbble.com/users/692322/screenshots/3876556/attachments/880208/tropical_summer.png" alt="Adaptive design - orange variant, mobile menu" width="500"/></a> |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

| <img src="https://cdn.dribbble.com/users/692322/screenshots/3873826/attachments/879366/mob.png" alt="Mobile design 3 variants: pink, lilac, orange" width="800"/> |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|

---

## Особенности / Features
   Особенность / Feature         | Описание / Description                                                                  |
 |-------------------------------|-----------------------------------------------------------------------------------------|
 | **Адаптивный дизайн**         | Корректное отображение на всех устройствах: мобильные, планшеты, десктопы.              |
 | *Responsive Design*           | Correct display on all devices: mobile, tablet, desktop.                                |
 | **Динамическая смена темы**   | Автоматическая смена цветовой палитры в зависимости от времени суток.                   |
 | *Dynamic Theme Switching*     | Automatic color palette change depending on the time of day.                            |
 | **Sass**                      | Использование препроцессора для удобного управления стилями и переменными.              |
 | *Sass*                        | Using a preprocessor for convenient style and variable management.                      |
 | **Минималистичный дизайн**    | Современный и стильный вид с акцентом на графике и социальных ссылках.                  |
 | *Minimalist Design*           | Modern and stylish look with a focus on graphics and social links.                      |

---

## Техническая реализация / Technical Implementation

### 1. Смена темы по времени суток / Dynamic Theme Switching

Смена темы реализована с помощью JavaScript / Theme switching is implemented using JavaScript

1. Определение текущего времени / Determine the current time:
   ```javascript
   const hour = new Date().getHours();
   ```
2. Установка класса для `<body>` в зависимости от времени / Set a class for <body> based on time:
   ```javascript
   if (hour >= 5 && hour < 12) {
     document.body.classList.add('morning');
   } else if (hour >= 12 && hour < 18) {
     document.body.classList.add('day');
   } else {
     document.body.classList.add('evening');
   }
   ```
3. CSS-стили для каждой темы / CSS styles for each theme:
   ```css
   body.morning {
     --bg-color: #f8e8d1;
     --text-color: #333;
     --accent-color: #ff9a8b;
   }
   ```

### 2. Адаптивность / Responsive Design

Адаптивность реализована с помощью медиа-запросов в CSS / 
Responsive design is implemented using media queries in CSS:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .flower {
    width: 80%;
  }
}
```

---

## Лицензия / License

**Проект создан исключительно в обучающих целях.**
*This project was created exclusively for training purposes and does not carry any benefits.*
