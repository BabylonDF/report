// Lógica de autenticação de login
document.getElementById("login-btn").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Credenciais de exemplo: usuário "admin" e senha "123456"
  if(username === "admin" && password === "123456") {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("page-content").style.display = "block";
  } else {
    document.getElementById("login-error").textContent = "Usuário ou senha incorretos!";
  }
});
