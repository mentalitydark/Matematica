const SelecionarFonte = document.querySelector('#fonte');
const SizeFonte = document.querySelector('#size');
const CorFonte = document.querySelector('#cor');
const TituloPlanilha = document.querySelector('#titulo');
const FontePlanilha = document.querySelector('#Fonte_Planilha');
const Cabecalho = document.querySelector('#cabecalho');
let Dados = document.querySelector('#dados');
const Fi = document.querySelector('#Fi');
const Fai = document.querySelector('#Fai');
const Fr = document.querySelector('#Fr');
const Far = document.querySelector('#Far');
const Planilha = document.querySelector('#Planilha');
const CriarPlanilha = document.querySelector('#Criar_Planilha');

SelecionarFonte.addEventListener('change', function() {
    Planilha.style.fontFamily = SelecionarFonte.value;
    if (SelecionarFonte.firstElementChild.value === 'Fonte') {
        SelecionarFonte.firstElementChild.remove();
    }
});
SizeFonte.addEventListener('change', function() {
    Planilha.style.fontSize = `${SizeFonte.value}px`;
});
CorFonte.addEventListener('change', function() {
    Planilha.style.color = CorFonte.value;
    if (CorFonte.firstElementChild.value === 'Cor') {
        CorFonte.firstElementChild.remove();
    }
});
const quantidade = function() {
    const dados = Dados.value.split(';');
    const usados = [];
    const DadosUsados = [];
    let verificado = 0;
    let i = 0;
    let i2 = 0;
    for (; i < dados.length; i++, i2 = 0) {
        for (; i2 < dados.length; i2++) if (dados[i]===dados[i2]) verificado++;
        if (DadosUsados.indexOf(dados[i]) === -1) DadosUsados.push(dados[i]);
        else verificado = 0;
        if (verificado > 0) {
            usados.push([dados[i], verificado]);
            verificado = 0;
        }
    }
    return usados;
};
const criartd = function(vezes) {
    let NewTds = '';
    for (let i = 0; i < vezes; i++) {
        let Nt = `<td>${quantidade()[i][0]}</td>`;
        const Nt2 = `<td class="hid">${quantidade()[i][1]}</td>`;
        NewTds += `<tr>${Nt}${Nt2}</tr>`;
    }
    return NewTds;
};
const FreAcuA = function() {
    const tbody = document.querySelector('tbody');
    let soma = 0;
    for (let i = 0; i < tbody.children.length; i++) {
        const NewElement = document.createElement('td');
        NewElement.className = 'hid2';
        NewElement.hidden = true;
        soma += quantidade()[i][1];
        NewElement.innerText = soma;
        tbody.children[i].appendChild(NewElement);
    }
}
const hiddenT = function(check) {
    switch (check) {
    case 'fi': {
        const temp = document.querySelectorAll('.hid');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = true;
        }
        break;
    }
    case 'fai': {
        const temp = document.querySelectorAll('.hid2');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = true;
        }
        break;
    }
    }
};
const hiddenF = function(check) {
    switch (check) {
    case 'fi': {
        const temp = document.querySelectorAll('.hid');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = false;
        }
        break;
    }
    case 'fai': {
        const temp = document.querySelectorAll('.hid2');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = false;
        }
        break;
    }
    }
};
Fi.addEventListener('change', function() {
    if (Fi.checked) {
        hiddenF('fi');
        document.querySelector('thead').firstChild.children[1].hidden = false;
    } else {
        hiddenT('fi');
        document.querySelector('thead').firstChild.children[1].hidden = true;
    }
});
Fai.addEventListener('change', function() {
    if (Fai.checked) {
        hiddenF('fai');
        document.querySelector('thead').firstChild.children[2].hidden = false;
    } else {
        hiddenT('fai');
        document.querySelector('thead').firstChild.children[2].hidden = true;
    }
});
CriarPlanilha.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if ((TituloPlanilha.value !== '') && (FontePlanilha.value !== '')
    && (Cabecalho.value !== '') && (Dados.value !== '')) {
            Dados = document.querySelector('#dados');
            quantidade();
            const caption = `<caption>${TituloPlanilha.value}</caption>`;
            let th = `<th>${Cabecalho.value}</th><th>Frequência Absoluta</th>`;
            th += `<th hidden>Frequência Acumulada Absoluta</th>`;
            th += `<th hidden>Frequência Relativa</th>`;
            th += `<th hidden>Frequência Acumulada Relativa</th>`;
            const thead = `<thead><tr>${th}</tr></thead>`;
            const tbody = `<tbody>${criartd(quantidade().length)}</tbody>`;
            Planilha.innerHTML += `<table>${caption}${thead}${tbody}</table>`;
            FreAcuA();
        }
    }
});
