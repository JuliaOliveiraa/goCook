// function adicionarIngrediente() {
//     // Clonar os campos de ingrediente
//     var ingredienteClonado = document.getElementById('nomeIngrediente').cloneNode(true);
//     var quantidadeClonada = document.getElementById('quantidadeIngrediente').cloneNode(true);

//     // Adicionar os campos clonados à lista
//     var listaIngredientes = document.getElementById('listaIngredientes');
//     var novoItem = document.createElement('li');
//     novoItem.innerHTML = ingredienteClonado.value + ' - ' + quantidadeClonada.value;
//     listaIngredientes.appendChild(novoItem);

//     // Limpar os campos originais
//     document.getElementById('nomeIngrediente').value = '';
//     document.getElementById('quantidadeIngrediente').value = '';
// }

function adicionarIngrediente() {
    var listaIngredientes = document.getElementById('listaIngredientes');

    // Criar novo item de lista
    var novoItem = document.createElement('li');

    // Adicionar campos de nome e quantidade
    novoItem.innerHTML = `
        <div class="label-float">
            <input type="text" class="nomeIngrediente" placeholder=" " required />
            <label class="labelNomeIngrediente" for="nomeIngrediente">Nome do Ingrediente</label>
        </div>
        <div class="label-float">
            <input type="text" class="quantidadeIngrediente" placeholder=" " />
            <label class="labelQuantidadeIngrediente" for="quantidadeIngrediente">Quantidade do Ingrediente</label>
        </div>
    `;

    // Adicionar botão de remoção
    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function () {
        listaIngredientes.removeChild(novoItem);
    };

    novoItem.appendChild(botaoRemover);

    // Adicionar o novo item à lista
    listaIngredientes.appendChild(novoItem);
}

// Adicionar evento de clique ao botão de adicionar ingrediente
document.getElementById('adicionarIngrediente').addEventListener('click', adicionarIngrediente);