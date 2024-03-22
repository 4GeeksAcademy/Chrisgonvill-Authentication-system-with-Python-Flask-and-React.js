import React, { useState, useActions } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useActions();

    const handleSubmit = e => {
        e.preventDefault();
        signup(email, password);
        // You can add additional logic here, such as redirecting the user after signup
    };

    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignUp;
