const navIcon = document.querySelector('.nav-icon')
const sidebar = document.querySelector('.sidebar')

navIcon.addEventListener('click', () => {
  document.body.classList.toggle('sidebar-mini')
})