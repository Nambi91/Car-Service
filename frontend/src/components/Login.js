import { useState } from "react"

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if (!username) {
            alert('Please enter username')
            return
        }

        if (!password) {
            alert('Please enter password')
            return
        }

        onLogin({ username, password })

        setUsername('')
        setPassword('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Username</label>
                <input
                    type='text'
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )

}

export default Login;