// Lógica de autenticação de login com opção de acesso

document.getElementById("login-btn").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Obtém a opção selecionada (valor "report" ou "expense")
  var option = document.querySelector('input[name="login-option"]:checked').value;
  
  // Credenciais de exemplo: usuário "admin" e senha "123456"
  if(username === "admin" && password === "123456") {
    if(option === "expense") {
      // Se a opção "Lançar Despesas" for selecionada, redireciona para o formulário do Google
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdx9JQTFJX8ri3sFDA-U2zcEt8UM93txlJw5sqUS_AIswxUzQ/viewform";
    } else {
      // Se a opção "Ver Relatório" for selecionada, fecha o modal e exibe a página do relatório
      document.getElementById("login-modal").style.display = "none";
      document.getElementById("page-content").style.display = "block";
    }
  } else {
    document.getElementById("login-error").textContent = "Usuário ou senha incorretos!";
  }
});
