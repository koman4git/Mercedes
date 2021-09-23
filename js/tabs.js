const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]') /* создание псевдомассивов по атрибуту */

// переключение кнопок Дизайн и Интерьер и текста
for(let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active')) /* удаление активного класса у кнопок */
    btn.classList.add('design-list__item_active')

    // console.dir(btn.dataset.tabsHandler); /* выводит эемент в виде объекта со всеми его свойствами */

    // сравнение атрибутов dataset для переключения картинок вместе с кнопками Дизайн и Интерьер
    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
          content.classList.add('hidden')
      }
    })

  })
}