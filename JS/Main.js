
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio real

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const feedback = document.getElementById('feedback');


  if (!nome || !email || !mensagem) {
    feedback.textContent = 'Preencha todos os campos.';
    feedback.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = 'E-mail inválido.';
    feedback.style.color = 'red';
    return;
  }

  //Simulação de envio
  feedback.textContent = 'Enviando...';
  feedback.style.color = 'black';

  setTimeout(() => {
    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.style.color = 'green';

    
    document.getElementById('contactForm').reset();
  }, 800);
});


// Tema claro/escuro
const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Altera o texto do botão
  if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Tema Claro";
  } else {
      toggleButton.textContent = "Tema Escuro";
  }
});

