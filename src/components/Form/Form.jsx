import { useState } from "react"
import validation from "../Validation/validation"

const Form = () => {
    const [userData, setUserData] = useState({email:"", password:""})
    
    const handleChange = (event)=>{
        setUserData({...userData, 
            [event.target.name]:event.target.value
        })

        const validateErrors = validation({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors(validateErrors)

    }

    const [errors, setErrors] = useState({})

    return(
        <form>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={handleChange} value={userData.email} name="email"/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={handleChange} value={userData.password} name="password"/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form