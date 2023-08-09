const validation = (userData)=> {
    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/
    if(!regexEmail.test(userData.email)){
        errors.email = "Invalid email..."
    }

    if(!regexPassword.test(userData.password)){
        errors.password = "Invalid password..."
    }
    return errors
}

export default validation