let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar() {
  let email = document.querySelector('#usuario')
  let emailLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')

  // Objeto a ser enviado no corpo da requisição
  let requestBody = {
    email: email.value,
    senha: senha.value,
  };

  fetch('https://gocook.azurewebsites.net/api/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha no login');
      }
      return response.json();
    })
    .then(data => {
      // Limpar mensagens de erro
      msgError.setAttribute('style', 'display: none');
      msgError.innerHTML = '';

      if (data.mensagem === 'Login bem-sucedido') {
        // Login bem-sucedido, redirecione para a página desejada ou execute outras ações necessárias
        console.log('Usuário logado:', data.usuario);

        // Exemplo de redirecionamento
        window.location.href = '/Home/home.html';

        // Salvar informações do usuário (token, etc.) no localStorage
        localStorage.setItem('token', data.usuario.token);
        localStorage.setItem('userLogado', JSON.stringify(data.usuario));
      } else {
        // Exibir mensagem de erro
        emailLabel.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = data.mensagem;
        email.focus();
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      // Exibir mensagem de erro genérica
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Erro ao realizar o login. Tente novamente.';
    });
}
