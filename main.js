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
const button = document.querySelector('button');

const enabled = function() {
    Fi.disabled = false;
    Fai.disabled = false;
    Fr.disabled = false;
    Far.disabled = false;
    button.disabled = false;
    SelecionarFonte.disabled = false;
    SizeFonte.disabled = false;
    CorFonte.disabled = false;
    TituloPlanilha.disabled = true;
    Dados.disabled = true;
    FontePlanilha.disabled = true;
    Cabecalho.disabled = true;
};
button.addEventListener('click', function() {
    document.querySelector('table').parentElement.remove();
    Fi.disabled = true;
    Fai.disabled = true;
    Fr.disabled = true;
    Far.disabled = true;
    SelecionarFonte.disabled = true;
    SizeFonte.disabled = true;
    CorFonte.disabled = true;
    TituloPlanilha.disabled = false;
    Dados.disabled = false;
    FontePlanilha.disabled = false;
    Cabecalho.disabled = false;
    Fi.checked = true;
    Fai.checked = false;
    Fr.checked = false;
    Far.checked = false;
    button.disabled = true;
});
SelecionarFonte.addEventListener('change', function() {
    document.querySelector('thead').style.fontFamily = SelecionarFonte.value;
    document.querySelector('tbody').style.fontFamily = SelecionarFonte.value;
    if (SelecionarFonte.firstElementChild.value === 'Fonte') {
        SelecionarFonte.firstElementChild.remove();
    }
});
SizeFonte.addEventListener('change', function() {
    document.querySelector('thead').style.fontSize = `${SizeFonte.value}px`;
    document.querySelector('tbody').style.fontSize = `${SizeFonte.value}px`;
});
CorFonte.addEventListener('change', function() {
    document.querySelector('thead').style.color = CorFonte.value;
    document.querySelector('tbody').style.color = CorFonte.value;
    if (CorFonte.firstElementChild.value === 'Cor') {
        CorFonte.firstElementChild.remove();
    }
});
function sortfunction(a, b) {
    return (a - b);
}
const quantidade = function() {
    const dados = Dados.value.split(';');
    dados.sort(sortfunction);
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
        const Nt = `<td>${quantidade()[i][0]}</td>`;
        const Nt2 = `<td class="hid">${quantidade()[i][1]}</td>`;
        NewTds += `<tr>${Nt}${Nt2}</tr>`;
    }
    return NewTds;
};
const freacua = function() {
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
};
const frerel = function() {
    const tbody = document.querySelector('tbody');
    let soma = 0;
    let quantidad = 0;
    for (let i = 0; i < quantidade().length; i++) {
        quantidad += quantidade()[i][1];
    }
    for (let i = 0; i < tbody.children.length; i++) {
        const NewElement = document.createElement('td');
        NewElement.className = 'hid3';
        NewElement.hidden = true;
        soma = parseFloat(((quantidade()[i][1] * 100) / quantidad).toFixed(2));
        NewElement.innerText = `${soma}%`;
        tbody.children[i].appendChild(NewElement);
    }
};
const frerelacu = function() {
    const tbody = document.querySelector('tbody');
    let soma = 0;
    let quantidad = 0;
    for (let i = 0; i < quantidade().length; i++) {
        quantidad += quantidade()[i][1];
    }
    for (let i = 0; i < tbody.children.length; i++) {
        const NewElement = document.createElement('td');
        NewElement.className = 'hid4';
        NewElement.hidden = true;
        soma += (quantidade()[i][1] * 100) / quantidad;
        soma = ((soma*1).toFixed(2))*1;
        if (i === tbody.children.length-1) {
            soma = parseFloat(soma.toFixed(0));
        }
        NewElement.innerText = `${soma}%`;
        tbody.children[i].appendChild(NewElement);
    }
};
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
    case 'fr': {
        const temp = document.querySelectorAll('.hid3');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = true;
        }
        break;
    }
    case 'far': {
        const temp = document.querySelectorAll('.hid4');
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
    case 'fr': {
        const temp = document.querySelectorAll('.hid3');
        for (let i = 0; i < temp.length; i++) {
            temp[i].hidden = false;
        }
        break;
    }
    case 'far': {
        const temp = document.querySelectorAll('.hid4');
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
Fr.addEventListener('change', function() {
    if (Fr.checked) {
        hiddenF('fr');
        document.querySelector('thead').firstChild.children[3].hidden = false;
    } else {
        hiddenT('fr');
        document.querySelector('thead').firstChild.children[3].hidden = true;
    }
});
Far.addEventListener('change', function() {
    if (Far.checked) {
        hiddenF('far');
        document.querySelector('thead').firstChild.children[4].hidden = false;
    } else {
        hiddenT('far');
        document.querySelector('thead').firstChild.children[4].hidden = true;
    }
});
const total = function() {
    const tbody = document.querySelector('tbody');
    let fa = 0;
    for (let i = 0; i < quantidade().length; i++) {
        fa+=quantidade()[i][1];
    }
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.innerText = 'Total';
    td2.innerText = fa;
    td3.innerText = '---';
    td4.innerText = '100%';
    td5.innerText = '---';
    td2.className = 'hid';
    td3.className = 'hid2';
    td4.className = 'hid3';
    td5.className = 'hid4';
    td3.hidden = true;
    td4.hidden = true;
    td5.hidden = true;
    const tr = document.createElement('tr');
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tbody.appendChild(tr);
};
CriarPlanilha.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if ((TituloPlanilha.value !== '') && (FontePlanilha.value !== '')
    && (Cabecalho.value !== '') && (Dados.value !== '')
&& (TituloPlanilha.disabled === false)) {
            Dados = document.querySelector('#dados');
            quantidade();
            const caption = `<caption>${TituloPlanilha.value}</caption>`;
            let th = `<th><h1>${Cabecalho.value}</h1></th>`;
            th += `<th><h1>Frequência Absoluta</h1></th>`;
            th += `<th hidden><h1>Frequência Acumulada Absoluta</h1></th>`;
            th += `<th hidden><h1>Frequência Relativa</h1></th>`;
            th += `<th hidden><h1>Frequência Acumulada Relativa</h1></th>`;
            const thead = `<thead id="thead"><tr>${th}</tr></thead>`;
            const tbody = `<tbody id="tbody">${criartd(quantidade().length)}</tbody>`;
            Planilha.innerHTML += `<div id="planilhafeita"><table class="container">${caption}${thead}${tbody}</table><span>Fonte:${FontePlanilha.value}</span></div>`;
            freacua();
            frerel();
            frerelacu();
            total();
            enabled();
        }
    }
});
