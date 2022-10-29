let accountsClients = [];

const validadarSenhasIguais = (event) => {
  if (event.target.password.value === event.target.passwordConfirm.value) {
    return true;
  } else {
    return false;
  }
};

const cadastrarConta = (event) => {
  event.preventDefault();

  if(validadarSenhasIguais(event)) {
    const account = {
      name: event.target.name.value,
      cpf: event.target.cpf.value,
      phone: event.target.phone.value,
      password: event.target.password.value,
      accountNumber: Math.floor(1000 + Math.random() * 9000),
      balance: 0
    }

    accountsClients.push(account)
    alert(`Conta criada com sucesso! Número: ${account.accountNumber}`)
    console.log(accountsClients)
  } else {
    alert('Senhas não conferem');
  };
}

const form = document.getElementById('form');
form.addEventListener('submit', cadastrarConta);






// Funções operações

// const trocarOperacao = (event) => {
//   const valor = document.getElementById('valor')
//   valor.disabled = event.target.value === 'SALDO'
// }

// const sacar = () => {}
// const depositar = () => {}
// const consultarSaldo = () => {}

// const validarConta = (conta, senha) => {
//   const contaCliente = accountsClients.find((c) => c.account === conta)
//   contaCliente && contaCliente.senha === senha ? true : false

// }


// const efetuarOperacao = (event) => {
//   event.preventDefault()

//   if(validarConta(parseInt(evento.target.account.value)))

//   switch(event.target.operacao.value) {
//     case 'SAQUE':
//       sacar();
//       break;
//     case 'DEPOSITO':
//       sacar();
//       break;
//     case 'SALDO':
//       consultarSaldo();
//       break;
//     default:
//       alert('Operação Inválida')
//   }
// }


// const operacao = document.getElementById('operacao')
// operacao.addEventListener('change', trocarOperacao)

// const efetuarOperacao = document.getElementById('form-acoes')
// operacao.addEventListener('submit', efetuarOperacao)












