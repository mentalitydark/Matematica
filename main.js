console.log('Main.js');
const fonte = document.querySelector('#fonte');
const body = document.querySelector('body');
const size = document.querySelector('#size');
const cor = document.querySelector('#cor');
const MontarPlanilha = document.querySelector('#MontarPlanilha');
const Colunas = document.querySelector('#Colunas');
const Linhas = document.querySelector('#Linhas');
const PlanilhaMain = document.querySelector('#PlanilhaMain');
const Tabela = document.querySelector('body');

fonte.addEventListener('change', function() {
    if (fonte.firstElementChild.value === 'Fonte') {
        fonte.firstElementChild.remove();
    }
    body.style.fontFamily = fonte.value;
});

size.addEventListener('change', function() {
    body.style.fontSize = `${size.value}px`;
});

cor.addEventListener('change', function() {
    if (cor.firstElementChild.value === 'Cor') {
        cor.firstElementChild.remove();
    }
    body.style.color = cor.value;
});

MontarPlanilha.addEventListener('click', function() {
    let Coluna = '';
    let Linha = '';
    let LinhaDasColunas = '';
    for (let i = 0; i < Colunas.value; i++) {
        Coluna += `<th><output></th>`;
    }
    for (let i = 0; i < Colunas.value; i++) {
        LinhaDasColunas += `<td><output></td>`;
    }
    for (let i = 1; i < Linhas.value; i++) {
        Linha += `<tr>${LinhaDasColunas}</tr>`;
    }
    PlanilhaMain.innerHTML += `<table><thead><tr>${Coluna}</tr></thead><tbody>${Linha}</tbody></table>`;
});

Tabela.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
        const ValueTag = e.target.firstElementChild.value;
        e.target.firstElementChild.remove();
        const NewElement = document.createElement('input');
        NewElement.value = ValueTag;
        NewElement.autofocus = true;
        e.target.appendChild(NewElement);
    }
    if (e.target.tagName === 'OUTPUT') {
        const ValueTag = e.target.value;
        const NewElement = document.createElement('input');
        NewElement.value = ValueTag;
        NewElement.autofocus = true;
        e.target.parentElement.appendChild(NewElement);
        e.target.remove();
    }
});

Tabela.addEventListener('keypress', function(e) {
    if ((e.target.tagName === 'INPUT' && e.target.type === 'text') && e.keyCode === 13) {
        const BackElement = document.createElement('output');
        BackElement.value = e.target.value;
        e.target.parentElement.appendChild(BackElement);
        e.target.remove();
    }
});
