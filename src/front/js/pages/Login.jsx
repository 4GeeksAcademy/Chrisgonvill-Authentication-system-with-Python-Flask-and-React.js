import React, { useState, useActions } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();

    const handleSubmit = e => {
        e.preventDefault();
        login(email, password);
        // You can add additional logic here, such as redirecting the user after login
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
