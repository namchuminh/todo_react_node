import React, { useState, useEffect, useContext } from 'react';
import { FormGroup, Label, Input, Button, Container } from 'reactstrap'
import Context from '../store/Context';
import { Link } from 'react-router-dom'

function Signup(props) {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { handelRegister } = useContext(Context);
    
    const actionRegister = async (fullname, username, password, confirmPassword) => {
        await handelRegister(fullname, username, password, confirmPassword);
        setFullname('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <Container fluid className='pt-5 body-login'>
                <Container>
                    <div className='form-login'>
                        <FormGroup>
                            <Label
                                for="fullname"
                            >
                                Full name
                            </Label>
                            <Input
                                id="fullname"
                                placeholder="Enter full name..."
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </FormGroup>
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
                        <FormGroup>
                            <Label
                                for="password2"
                            >
                                Confirm password
                            </Label>
                            <Input
                                id="password2"
                                placeholder="Confirm password..."
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup className='mt-4'>
                            <Button
                                color='info'
                                style={{ color: 'white', width: '100%', fontWeight: 'bold' }}
                                onClick={() => actionRegister(fullname, username, password, confirmPassword)}
                            >
                                Sign Up
                            </Button>
                        </FormGroup>
                        <FormGroup className='mt-4 mb-0 text-center'>
                            <Label>
                                Has been account? <Link to={'/login/'} style={{ color: 'black', textDecoration: 'none' }}>Log in!</Link>
                            </Label>
                        </FormGroup>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Signup;