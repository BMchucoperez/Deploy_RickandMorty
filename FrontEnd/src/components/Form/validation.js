const validation = (userData) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let errors = {};

    if(!regexEmail.test(userData.email)){
        errors.email = "El email es inválido";
    }
    if(!userData.email){
        errors.email = "Este campo no puede estar vacío";
    }
    if(userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos 1 número";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;