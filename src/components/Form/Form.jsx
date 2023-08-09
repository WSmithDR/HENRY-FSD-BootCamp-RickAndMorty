const Form = () => {
    return(
        <form>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email"/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form