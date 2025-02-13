// Lógica de autenticação de login com dropdown de opção

document.getElementById("login-btn").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Obtém a opção selecionada no dropdown
  var option = document.getElementById("login-option").value;
  
  // Credenciais de exemplo: usuário "admin" e senha "123456"
  if (username === "admin" && password === "123456") {
    if (option === "expense") {
      // Se selecionado "Lançar Despesas", redireciona para o formulário do Google
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdx9JQTFJX8ri3sFDA-U2zcEt8UM93txlJw5sqUS_AIswxUzQ/viewform";
    } else if (option === "report") {
      // Se selecionado "Ver Relatório", fecha o modal e exibe a página do relatório
      document.getElementById("login-modal").style.display = "none";
      document.getElementById("page-content").style.display = "block";
    } else {
      document.getElementById("login-error").textContent = "Por favor, selecione uma opção!";
    }
  } else {
    document.getElementById("login-error").textContent = "Usuário ou senha incorretos!";
  }
});
