import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Button, Container, Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import { profile, updateProfile } from '../services/userServices';
import { toast } from 'react-toastify';
function Profile(props) {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const getProfile = async () => {
        try {
            const response = await profile();
            if(response.data.users && response.status == 200){
                setFullname(response.data.users.fullname)
                setUsername(response.data.users.username)
                return;
            }
        } catch (error) {
            console.log(error)
            return;
        }
    }

    const handleUpdateProfile = async () => {
        if(fullname == "" || fullname == undefined){
            toast.error("Vui lòng không bỏ trống họ tên!");
            return;
        }

        if (password !== "") {
            if(confirmPassword == ""){
                toast.error("Vui lòng xác nhận mật khẩu!");
                return;
            }
        }else if(confirmPassword !== ""){
            if(password == ""){
                toast.error("Vui lòng nhập mật khẩu cần đổi!");
                return;
            }
        } 
        
        if(password !== "" && confirmPassword !== ""){
            if(password != confirmPassword){
                toast.error("Mật khẩu nhập không trùng khớp!");
                return;
            }
        }

        try{
            const response = await updateProfile(fullname, password, confirmPassword);
            if(response.data.users && response.status == 200){
                setFullname(response.data.users.fullname);
                setUsername(response.data.users.username);
                setPassword('');
                setConfirmPassword('');
                toast.success(response.data.message);
                return;
            }
        }catch(error){
            toast.error(error.response.data.error);
            return;
        }

    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <Container fluid className='pt-5 body-login'>
                <Container>
                    <div className='form-login'>
                        <FormGroup>
                            <h3>Profile Setting</h3>
                        </FormGroup>
                        {' '}
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
                                disabled
                            />
                        </FormGroup>
                        {' '}
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
                            <div className='d-flex justify-content-between'>
                                <Button><Link to='/' style={{ fontWeight: 'unset', textDecoration: 'none' }}>Go Back</Link></Button>
                                <Button className='btn btn-info text-white' onClick={() => handleUpdateProfile()}>Update Profile</Button>
                            </div>
                        </FormGroup>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Profile;