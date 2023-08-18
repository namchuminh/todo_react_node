import React, { useState, useEffect } from 'react';
import { Input, Button, Label, FormGroup } from 'reactstrap'
import '../assets/css/sidebar.css'

function Sidebar(props) {
    const {handleSearch, isSearching, handleGetAll} = props;
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [important, setImportant] = useState('');
    return (
        <>
            <div className="sidebar">
                <FormGroup>
                    <Label for="name">
                        Filter by status
                    </Label>
                    <Input
                        name="select"
                        type="select"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option hidden>
                            --Select--
                        </option>
                        <option>
                            Todo
                        </option>
                        <option>
                            Progress
                        </option>
                        <option>
                            Done
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="name">
                        Filter by type
                    </Label>
                    <Input
                        name="select"
                        type="select"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option hidden>
                            --Select--
                        </option>
                        <option>
                            Work
                        </option>
                        <option>
                            Personal
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="name">
                        Filter by important
                    </Label>
                    <Input
                        name="select"
                        type="select"
                        onChange={(e) => setImportant(e.target.value)}
                    >
                        <option hidden>
                            --Select--
                        </option>
                        <option>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                    </Input>
                </FormGroup>
                <div className='d-flex justify-content-center mt-5'>
                    <Button className='btn btn-info text-white' style={{ width: '100%', borderRadius: '0px' }} onClick={() => handleSearch(status, type, important)}>Search Todo</Button>
                </div>
                {
                    isSearching ?
                        <>
                            <div className='d-flex justify-content-center mt-2'>
                                <Button className='text-white' style={{ width: '100%', borderRadius: '0px' }} onClick={() => handleGetAll()}>Get All Todo</Button>
                            </div>
                        </>
                    :
                    null
                }
                
            </div>
        </>
    )
}

export default Sidebar;