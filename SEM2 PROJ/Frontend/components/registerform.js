import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ username, password });
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
