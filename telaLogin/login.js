let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let email = document.querySelector('#usuario')
  let emailLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    email: '',
    senha: ''
  }
  
  listaEmail = JSON.parse(localStorage.getItem('listaEmail'))
  
  listaEmail.forEach((item) => {
    if(email.value == item.userCad && senha.value == item.senhaCad){
       
      emailValid = {
         nome: item.nomeCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(email.value == emailValid.email && senha.value == emailValid.senha){
    window.location.href = 'index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(emailValid))
  } else {
    emailLabel.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}

