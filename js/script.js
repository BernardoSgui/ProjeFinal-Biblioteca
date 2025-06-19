document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const motivo = document.getElementById("motivo").value;

  if (!nome || !email || !mensagem || !motivo || !email.includes("@")) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  alert("Sua mensagem foi registrada com sucesso!");
  this.reset();
});