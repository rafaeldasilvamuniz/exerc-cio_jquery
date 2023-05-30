$(document).ready(function(){

const nom = [];

let linhas = '';

$('#form-atividade').on('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    $('#risca').on('click', function(e){
        $('li').css('text-decoration','line-through');
     })

})
   
   


function adicionaLinha() {    
      const inputNome = $('#nome').val();

    let linha = '<tr>';
    linha += `<th><ul><li style="display:flex-wrap">${inputNome}</li></ul><button type="submit" id="risca">OK</button></th>`;

    
    linha += '</tr>';

    linhas += linha;

    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}



}




)

