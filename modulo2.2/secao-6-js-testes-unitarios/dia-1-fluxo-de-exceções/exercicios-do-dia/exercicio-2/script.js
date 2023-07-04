const studentRegister = (name, age) => {
  try{
    if(!name || age < 18) {
        throw new Error('Ops, infelizmente nesse momento você nao pode fazer as aulas');
    }
    if(!name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
    if(name !== undefined && age > 18){
        return `${name}, seja bem-vindo(a) à AuTrybe!`;
    }
  }catch(error){
    return error.message;
  }
}