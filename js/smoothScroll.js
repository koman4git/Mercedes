const linksHead = document.querySelectorAll('.menu-list__link')
const mainScrool = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScrool] /* спред оператор (склеивание двух массивов) */

newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const ID = event.target.getAttribute('href').substr(1);
    
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})