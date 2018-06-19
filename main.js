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
const Far = document.querySelector('Far');
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
const verificar = function() {
    Dados = Dados.value.split(';');
    if (Dados.length > 1) {
        const usados = [];
        const quantidadeUsados = [];
        let verificado = true;
        let c = 0;
        let quantidade = 1;
        for (let i = 0; i < Dados.length; i++, c = 0, verificado = true) {
            for (; c <= usados.length; c++) {
                if (usados[c] === Dados[i]) {
                    verificado = false;
                    quantidade++;
                    console.log('oi');
                }
            }
            if (verificado) {
                usados.push(Dados[i]);
            }
            if (c === usados.length) {
                quantidadeUsados.push(quantidade);
                quantidade = 0;
            }
        }
        console.log(usados);
        console.log(quantidadeUsados);

    }
};
CriarPlanilha.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if ((TituloPlanilha.value !== '') && (FontePlanilha.value !== '')
    && (Cabecalho.value !== '') && (Dados.value !== '')) {
            Dados = document.querySelector('#dados');
            verificar();
            const caption = `<caption>${TituloPlanilha}</caption>`;
            Planilha.innerHTML += ``;
        }
    }
});
