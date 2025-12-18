const sections = document.querySelectorAll('.projectt');
window.addEventListener('scroll', checkSections);

function checkSections() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}


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