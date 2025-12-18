function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

const contact = document.querySelector('.contact');
const resume = document.querySelector('.second-resume');
const secContact = document.querySelector('.second-contact');
const portfolio = document.querySelector('.second-port');

contact.addEventListener('click', () => {
  location.href = "index.html"
})

resume.addEventListener('click', () => {
  location.href = "resume.html"
})

portfolio.addEventListener('click', () => {
  location.href = "portfolio.html"
})

secContact.addEventListener('click', () => {
  location.href = "contact.html"
})
