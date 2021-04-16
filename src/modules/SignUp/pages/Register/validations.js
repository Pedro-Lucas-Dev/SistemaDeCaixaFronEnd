function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const confirmRegister = (userData) => {
  const errors = [];

  if (!userData.fistName) {
    errors.push({
      field: "fistName",
      message: "O campo Nome é obrigatório",
    });
  }
  if (!userData.lastName) {
    errors.push({
      field: "lastName",
      message: "O campo Sobrenome é obrigatório",
    });
  }
  if (!userData.email) {
    errors.push({
      field: "email",
      message: "O campo email é obrigatório",
    });
  }
  if (!validateEmail(userData.email)) {
    errors.push({
      field: "invalidEmail",
      message: "email invalido",
    });
  }
  if (!userData.password) {
    errors.push({
      field: "password",
      message: "O campo De Senha é obrigatório",
    });
  }
  if (!userData.confirmpassaword) {
    errors.push({
      field: "confirmpassaword",
      message: "A confirmação de senha deve ser preenchida",
    });
  }
  if (userData.confirmpassaword !== userData.password) {
    errors.push({
      field: "checkPassaword",
      message: "As senhas devem ser iguais",
    });
  }
  return errors;
};
