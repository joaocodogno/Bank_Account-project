let accountsClients = [];

const validadarSenhasIguais = (event) => {
  if (event.target.password.value === event.target.passwordConfirm.value) {
    return true;
  } else {
    return false;
  }
};



const handleSubmit = (event) => {
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
  } else {
    alert('Senhas não conferem');
  };
}

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);




