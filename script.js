function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('toggle-darkmode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('whatsapp-link').addEventListener('click', function () {
  const mensagem = document.getElementById('mensagem').value.trim();
  if (mensagem) {
    const texto = encodeURIComponent(mensagem);
    const numero = '5511959865082';  
    const link = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;
    this.setAttribute('href', link);
  }
});
