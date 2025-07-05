import './Login.css';

function Login() {
    return (
        <div className='main-login-container'>
            <div className="login-container roboto-300italic">
                <div className='inputs'>
                    <label for="email">Email</label>
                    <input type="email" className='login-inputs' placeholder="Enter your email"></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" className='login-inputs' placeholder="Enter your Password"></input>
                </div>
            </div>
        </div>

    )
}
export default Login;
