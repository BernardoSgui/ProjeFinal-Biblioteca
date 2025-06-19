document.getElementById("buscaLivro").addEventListener("keyup", function () {
  const termo = this.value.toLowerCase();
  const livros = document.querySelectorAll(".livro");

  let encontrou = false;

  livros.forEach((livro) => {
    const titulo = livro.dataset.titulo.toLowerCase();
    if (titulo.includes(termo)) {
      livro.style.display = "block";
      encontrou = true;
    } else {
      livro.style.display = "none";
    }
  });

  const mensagem = document.getElementById("mensagemNaoEncontrado");

  if (termo === "") {

    livros.forEach((livro) => {
      livro.style.display = "block";
    });
    mensagem.innerHTML = "";
  } else if (!encontrou) {

    mensagem.innerHTML = `<p class="text-danger">Livro não encontrado.</p>`;
  } else {
    mensagem.innerHTML = "";
  }
});
