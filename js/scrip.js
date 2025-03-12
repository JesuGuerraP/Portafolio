document.querySelectorAll('.leerMasbtn').forEach(button => {
  button.addEventListener('click', function() {
      const textoEscondido = this.previousElementSibling;
      textoEscondido.classList.toggle('mostrar');
      this.textContent = textoEscondido.classList.contains('mostrar') ? 'Leer menos' : 'Leer más';
  });
});
