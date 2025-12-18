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


function downloadAsImage() {
  const section = document.getElementById("capture-section");

  html2canvas(section).then(canvas => {
    const link = document.createElement("a");
    link.download = "excellent-ay-resume.png";
    link.href = canvas.toDataURL();
    link.click();
  });
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