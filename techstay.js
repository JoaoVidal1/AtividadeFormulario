function formTel(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length <= 2) {
        input.value = '(' + valor;
    } else if (valor.length <= 6) {
        input.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
    } else {
        input.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
    }
}