const resultado = document.getElementById('result');
var texto = document.getElementById('texto');

var valor;

resultado.addEventListener('click', function(){
    
    valor = eval(texto.value);
    console.log(valor)

    if(!isFinite(valor)) {
        valor = '';
        alert('Error en la operación: El resultado no puede ser infinito o NaN.');
    }

    texto.value = valor;
});