$(document).ready(function(){

const nom = [];

let linhas = '';

$('#form-atividade').on('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

})
   



function adicionaLinha() {    
      const inputNome = $('#nome').val();

    let linha = '<tr>';
    linha += `<th><ul><li style="display: flex-wrap"><p>${inputNome}</p></li></ul></th>`;
    
    
    linha += '</tr>';

    /*$(inputNome).on("click",function(){
        $(this).toggleClass('text-decoration','line-through');
    }
    )*/
    
    

    linhas += linha;

    
}

function toggleRiscado() {
    $(event.target).toggleClass('css');
  }
  

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

/*function myFunction(){
    const x = $('#nome').val();
    $(x).toggleClass('text-decoration','line-through');
}*/



}




)

