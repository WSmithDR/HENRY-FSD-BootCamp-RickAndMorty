import { useState } from "react"

const Form = () => {
    const [userData, setUserData] = useState({email:"", password:""})
    const handleChange = (event)=>{
        setUserData({...userData, [event.target.name]:event.target.value})
    }
    return(
        <form>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={handleChange} value={userData.email} name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={handleChange} value={userData.password} name="password"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form