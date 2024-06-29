const navigationOptions = [
  {
    name: 'home',
    color: '#D80200',
  },
  {
    name: 'report',
    color: '#D80200',
  },
  {
    name: 'profile',
    color: '#D80200',
  },
]

const links = document.querySelectorAll('nav a')

function handleClick(e) {
  e.preventDefault()
  links.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active')
    }
  })

  const name = this.textContent.trim().toLowerCase()
  const { color } = navigationOptions.find((item) => item.name === name)

  const style = window.getComputedStyle(this)
  const hoverColor = style.getPropertyValue('--hover-c')
  if (color !== hoverColor) {
    this.style.setProperty('--hover-c', color)
  }

  this.classList.add('active')
}

links.forEach((link) => link.addEventListener('click', handleClick))
