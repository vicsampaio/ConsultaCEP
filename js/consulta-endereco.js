let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

var btn = document.getElementById('btn');
btn.addEventListener('click', async function(e) {
    e.preventDefault();

    console.log(cep);
    const response = await fetch('https://viacep.com.br/ws/' + cep.value + '/json/');
    const data = await response.json();
    if ("erro" in data) {
        alert('CEP não encontrado');
        return;
    }
    popularForm(data);
});

function popularForm(resposta) {
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}

