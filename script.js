function adicionarAluno() {
    
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    
    const media = (nota1 + nota2) / 2;
    const situacao = media >= 5 ? 'APROVADO' : 'REPROVADO';

    
    const tabela = document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    
    const celulaNome = novaLinha.insertCell(0);
    const celulaMatricula = novaLinha.insertCell(1);
    const celulaNota1 = novaLinha.insertCell(2);
    const celulaNota2 = novaLinha.insertCell(3);
    const celulaMedia = novaLinha.insertCell(4);
    const celulaSituacao = novaLinha.insertCell(5);

    
    celulaNome.innerText = nome;
    celulaMatricula.innerText = matricula;
    celulaNota1.innerText = nota1.toFixed(1);
    celulaNota2.innerText = nota2.toFixed(1);
    celulaMedia.innerText = media.toFixed(1);
    celulaSituacao.innerText = situacao;

    document.getElementById('formAluno').reset();
}