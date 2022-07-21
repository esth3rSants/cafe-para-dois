/** PARTES DAS BARRAS DE NAVEGAÇÃO */
let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}
/*function para intercalar a abertura e fechamento dos trem*/
window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}
/********************************/
