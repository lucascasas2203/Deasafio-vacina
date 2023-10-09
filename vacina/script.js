const vacina = [
    { Nome: "Evandro", CPF: "12345678910", dataDeNacimento: "08-01-1976", 
      nomeDaVacina: "BCG" },
];

// Função para exibir as vagas na tela de listagem
function listarVacina() {
    const vacinaList = document.getElementById("vacina-list");
    vacinaList.innerHTML = "";

    vacina.forEach(vacinas => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${vacinas.Nome}, CPF: ${vacinas.CPF}, Data de nacimento: ${vacinas.dataDeNacimento},
         Nome da vacina: ${vacinas.nomeDaVacina}`;
        vacinaList.appendChild(listItem);
    });
}

// Função para salvar o cadastro de reserva
function salvarCadastro() {
    const Nome = document.getElementById("Nome").value;
    const CPF = document.getElementById("CPF").value;
    const dataDeNacimento = document.getElementById("Data de nacimento").value;
    const nomeDaVacina = document.getElementById("Nome da vacina").value;
    
  
let dataOriginal = new Date(); // data atual = data vacinação
const padraoData = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
}); // padranização da data em formato pt-BR = "dd/mm/aaaa"

// resgata o dia do mês atual
let diaAtual = dataOriginal.getDate();
// Adicione 30 dias ao dia atual
diaAtual += 30;

// gera uma nova data com o dia atual modificado
let dataNova = new Date(dataOriginal);
dataNova.setDate(diaAtual); // data reforço com dia calculado ) +30 dias

console.log("Data vacinação: " + padraoData.format(dataOriginal));




    // Adicione o novo cadastro à lista de vagas
    vacina.push({ Nome, CPF, dataDeNacimento, nomeDaVacina});

    // Limpe o formulário
    document.getElementById("cadastro-form").reset();

    // Exiba uma mensagem de confirmação
    alert("Cadastro realizado com sucesso!");

    // Atualize a lista de vagas na tela
    listarVacina();

    alert("Data Reforço: " + padraoData.format(dataNova));
}

// Event listener para o formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    salvarCadastro();
});

// Inicialize a lista de vagas na tela de listagem
listarVacina();