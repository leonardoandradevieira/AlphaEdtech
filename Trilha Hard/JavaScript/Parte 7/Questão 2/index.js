let cep = document.querySelector("input");

cep.addEventListener('keyup', validacao);

function validacao() {
const digito = parseInt(cep.value.slice(-1));

if (isNaN(digito)) {
    cep.value = cep.value.slice(0, -1);
    return false;
} else {
    tamanho();
	return true;
};
};

function tamanho() {
    const tamanhoCep = cep.value.length;

    if (tamanhoCep === 5 ) {
        cep.value += '-';
    };

    if (tamanhoCep > 9) {
        cep.value = cep.value.slice(0, -1);
    }
};