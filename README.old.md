1. Лінк на пакет react-media: https://www.npmjs.com/package/react-media

2. Встановлення пакету: npm install --save react-media

3. Імпорт з використанням ES modules: import Media from 'react-media'

4. Обгорнути реакт-компонент в Media

5. Додати атрибут queries (або query, якщо тільки одна точка перелому), куди
   передати об’єкт з властивостями, де кожне значення є дійсним медіа-запитом
   CSS.

   - Варіанти запису:

   * query={{ small: { maxWidth: 599 } }} (без px),
   * query={{ small: "(max-width: 599px)" }}
   * queries={{ initial: { maxWidth: 319 }, small: { minWidth: 320, maxWidth: 767 }, ... }}
     (без px),
   * queries={{ initial: '(max-width: 319px)', small: '(min-width: 320px) and (max-width: 767px)', ... }}

6. Огортаємо дочірній prop, що має бути функцією, у вираз {}. Аргументом функції
   буде об’єкт з тими ж ключами, що й об’єкт запитів (з queries/query). Далі
   відбувається рендер того компоненту, який відповідає певному медіазапту.

P.S. Лінк на відео з коротким поясненням базового використання і з можливістю
створити хук useMediaQuery:
https://www.youtube.com/watch?v=_Dm7jkJ75Zk&ab_channel=CodeWithAlex
