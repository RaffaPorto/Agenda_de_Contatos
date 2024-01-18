const form = document.getElementById('form-cont');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomecont = document.getElementById('nome-cont');
    const inputTelcont = document.getElementById('tel-cont');
    

    let linha = '<tr>';
    linha += `<td>${inputNomecont.value}</td>`;
    linha += `<td>${inputTelcont.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    linhas = validaTel

})