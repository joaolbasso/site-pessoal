let textoAcademico = document.getElementById('textoAcademico');

const portugues = {
    txtAcademico: 'Acadêmico de Engenharia de Software na'
}

const espanhol = {
    txtAcademico: 'Académico de Ingeniería de Software en'
}

const ingles = {
    txtAcademico: 'Software Engineer Student on'
}

const linguagens = [portugues, espanhol, ingles];

let linguagemSelecionada = 0;

function mudarTexto() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-linguagem"]:checked').id;
    linguagemSelecionada = idOpcaoSelecionada.charAt(0);
    textoAcademico.innerText = linguagens[linguagemSelecionada].txtAcademico;
}