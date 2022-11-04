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

// obtem o elemento conta
const obterConta = (account) => {
  const accountClient = accountsClients.find((a) => a.accountNumber === account)
  return accountClient
}

const sacar = (account, amount) => {
  const accountClient = obterConta(account)
  if (validarValor(amount)) {
    if (validarSaldo(account, amount)) {
      let actualBalance
      const updatedAccounts = accountsClients.map((c) => {
        if (c.accountNumber === account) {
          actualBalance = c.balance - amount
          return { ...c, balance: actualBalance }
        }
        return account
      })
      accountsClients = updatedAccounts
      alert (`Saque efetuado com sucesso. Saldo atual: ${actualBalance}`)
    } else {
      alert (`Saldo insuficiente. Seu saldo é: ${accountClient.balance}`)
    }
  } else {
    alert ('Valor inválido')
  }
}

// função depositar
const depositar = (account, amount) => {
  if(validarValor (amount)) {
    const accountClient = obterConta(account)
    accountClient.balance += amount
    console.log(accountsClients)
    alert (`Depósito efetuado com sucesso. Saldo atual: ${accountClient.balance}`)
  } else {
    alert ('Valor inválido')
  }
}

// função consulta saldo
const consultarSaldo = (account) => {
  const accountClient = obterConta(account)
  alert (`Seu saldo é: ${accountClient.balance}`)
}

// validar se a conta existe e se a senha corresponde
const validarConta = (account, password) => {
  const accountClient = obterConta(account)
  return accountClient && accountClient.password === password ? true : false
}

// valida se o valor de depósito ou saque é maior que 0 e se é um número
const validarValor = (amount) => {
  return !isNaN(amount) && amount > 0
}


const validarSaldo = (account, amount) => {
  const accountClient = obterConta(account)
  return accountClient.balance >= amount
}

// chama a operação selecionada no submit do form
const efetuarOperacao = (event) => {
  event.preventDefault()
  const account = parseInt(event.target.accountOperations.value)
  const password = event.target.passwordOperations.value
  const amount = parseInt(event.target.amount.value)

  const contaValida = validarConta(account, password)

  console.log(contaValida)
  if(contaValida) {
    switch (event.target.operation.value) {
      case 'WITHDRAW':
        sacar(account, amount);
        break;
      case 'DEPOSIT':
        depositar(account, amount);
        break;
      case 'BALANCE':
        consultarSaldo(account);
        break;
      default:
        alert('Operação Inválida')
    }
  } else {
    alert ('Conta ou senha inválida')
  }
}


const operation = document.getElementById('operation')
operation.addEventListener('change', changeOperation)

const formOperations = document.getElementById('form-operations')
formOperations.addEventListener('submit', efetuarOperacao)