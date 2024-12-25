var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var simbols = '/°?}{[]^~>,<+=_-*&%$#@!';
var button = document.getElementById('button')
button.addEventListener('click', geraSenha)
var main = document.getElementsByClassName('main')


function geraSenha() {
    var Senha = '';
    var recebe = document.getElementById('recebe');
    var option = document.getElementsByName('option');
    var tamanho = document.getElementById('tamanho');

    var tamanhoSenha = parseInt(tamanho.value);
    if (tamanhoSenha > 100) {
        tamanho.value = 100
    }
    var contador = ''

    if (option[0].checked) {
        Senha += abc
    }

    if (option[1].checked) {
        Senha += num
    }

    if (option[2].checked) {
        Senha += simbols
    }

    if (!Senha || !tamanho.value) {
        recebe.value = 'Invalido';
        recebe.style.textAlign = 'center'
        recebe.style.color = '#000000'
        recebe.style.fontWeight = 'bold'
    }
    else {
        while (contador.length < tamanhoSenha) {
            var random = Math.floor(Math.random() * Senha.length)
            contador += Senha[random]
        }

        recebe.value = contador
        recebe.style.textAlign = 'center'
        recebe.style.color = '#000000'
        recebe.style.fontWeight = 'bold'

    }
}

var copiar = document.getElementById('copiar')
copiar.addEventListener('click', () => {
    if (recebe.value == '' || recebe.value == 'Invalido') {
        copiar.innerText = 'Impossivel Copiar'

        setTimeout(() => {
            copiar.innerText = 'Copiar Senha'
        }, 1500)
    } else{
        navigator.clipboard.writeText(recebe.value)
        copiar.innerText = 'Senha Copiada'
    
        setTimeout(() => {
            copiar.innerText = 'Copiar Senha'
        }, 1500)
    }



})
