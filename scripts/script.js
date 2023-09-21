const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault(); // Evite o comportamento padrão do link

  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
}
