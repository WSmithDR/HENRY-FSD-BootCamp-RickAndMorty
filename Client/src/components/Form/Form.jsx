import { useState } from "react"
import validation from "../Validation/validation"

const Form = ({login})=> {
    //Local states
    const [userData, setUserData] = useState({email:"", password:""})
    const [errors, setErrors] = useState({})
    
    //handlers
    const handleChange=(event)=>{
        setUserData({...userData, [event.target.name]:event.target.value})
        const validateErrors = validation({
            ...userData, 
            [event.target.name]: event.target.value})
        
        setErrors(validateErrors)
    }
    const handleSubmit = (event)=> {
        event.preventDefault()
        login(userData)
    }

    //rendering
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input value={userData.email} name="email" type="email" onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="passowrd">Password: </label>
                <input value={userData.password} name="password" type="password" onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default Form