import React, { useState, useEffect, useContext } from 'react';
import { FormGroup, Label, Input, Button, Container } from 'reactstrap'
import '../assets/css/login.css';
import Context from '../store/Context';
import { Link } from 'react-router-dom'
function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(Context);

    return (
        <>
            <Container fluid className='pt-5 body-login'>
                <Container>
                    <div className='form-login'>
                        <FormGroup>
                            <Label
                                for="username"
                            >
                                User name
                            </Label>
                            <Input
                                id="username"
                                placeholder="Enter username..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label
                                for="password"
                            >
                                Password
                            </Label>
                            <Input
                                id="password"
                                placeholder="Enter password..."
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup className='mt-4'>
                            <Button
                                color='info'
                                style={{ color: 'white', width: '100%', fontWeight: 'bold' }}
                                onClick={() => handleLogin(username, password)}
                            >
                                Login
                            </Button>
                        </FormGroup>
                        <FormGroup className='mt-4 mb-0 text-center'>
                            <Label>
                                Not registered? <Link to={'/signup/'} style={{ color: 'black', textDecoration: 'none' }}>Create an account!</Link>
                            </Label>
                        </FormGroup>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Login;