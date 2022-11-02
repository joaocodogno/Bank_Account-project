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



// FUNÇÕES OPERAÇÕES

// desabilita o campo valor
const changeOperation = (event) => {
  const amount = document.getElementById('amount')
  amount.disabled = event.target.value === 'BALANCE'
}

const obterConta = (account) => {
  const accountClient = accountsClients.find((a) => a.accountNumber === account)
  return accountClient
}

const sacar = () => {

}

const depositar = () => {}


const consultarSaldo = (account) => {
  const accountClient = obterConta(account)
  alert (`Seu saldo é: ${accountClient.amount}`)
}


const validarConta = (account, password) => {
  const accountClient = obterConta(account)
  return accountClient && accountClient.password === password ? true : false
}


const efetuarOperacao = (event) => {
  event.preventDefault()
  const account = parseInt(event.target.accountOperations.value)
  const password = event.target.passwordOperations.value

  const contaValida = validarConta(account, password)

  console.log(contaValida)
  if(contaValida) {
    console.log('sou feliz')
    //   case 'WITHDRAW':
    //     sacar();
    //     break;
    //   case 'DEPOSIT':
    //     depositar();
    //     break;
    //   case 'BALANCE':
    //     consultarSaldo(account);
    //     break;
    //   default:
    //     alert('Operação Inválida')
    // }
  } else {
    alert ('Conta ou senha inválida')
  }
}


const operation = document.getElementById('operation')
operation.addEventListener('change', changeOperation)

const formOperations = document.getElementById('form-operations')
formOperations.addEventListener('submit', efetuarOperacao)












 // switch (event.target.operation.value) {
    //   case 'WITHDRAW':
    //     sacar();
    //     break;
    //   case 'DEPOSIT':
    //     depositar();
    //     break;
    //   case 'BALANCE':
    //     consultarSaldo(account);
    //     break;
    //   default:
    //     alert('Operação Inválida')
    // }