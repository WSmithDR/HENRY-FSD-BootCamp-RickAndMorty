import { useState } from "react"
import validation from "../Validation/validation"

const Form = ({login})=>{
    const [userData, setUserData] = useState({email:"", password:""})
    const handleChange = (event)=> {
        setUserData({...userData, [event.target.name]:event.target.value})
        
        const validateErrors = validation(
            {...userData, [event.target.name]:event.target.value}
        )

        setErrors(validateErrors)
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData)
    }

    const [errors, setErrors] = useState({})
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email: </label>
                <input value={userData.email} name="email" type="email" onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input value={userData.password} name="password" type="password" onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form