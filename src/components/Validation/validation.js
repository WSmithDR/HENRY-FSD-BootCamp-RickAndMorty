const validation = (userData) => {
    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(!regexEmail.test(userData.email)){
        errors.email = "Invalid E-mail..."
    }
    if(userData.length>35){
        errors.email="E-mail should have more than 35 characters..."
    }
    if(userData.password.length<6){
        errors.password = "It must have at least 6 characters" 
    }

    return errors
}

export default validation