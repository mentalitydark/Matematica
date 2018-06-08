console.log('Main.js');
const fonte = document.querySelector('#fonte');
const h1 = document.querySelector('h1');
const size = document.querySelector('#size');
const cor = document.querySelector('#cor');
const MontarPlanilha = document.querySelector('#MontarPlanilha');
fonte.addEventListener('change', function() {
    if (fonte.firstElementChild.value === 'Fonte') {
        fonte.firstElementChild.remove();
    }
    h1.style.fontFamily = fonte.value;
});
size.addEventListener('change', function() {
    h1.style.fontSize = `${size.value}px`;
});
cor.addEventListener('change', function() {
    if (cor.firstElementChild.value === 'Cor') {
        cor.firstElementChild.remove();
    }
    h1.style.color = cor.value;
});
