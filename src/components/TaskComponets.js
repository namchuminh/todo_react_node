import React, { useState, useEffect, useContext } from 'react';
import { Card, FormGroup, Input, Label, CardBody, CardGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
import { deleteTodo } from '../services/todoServices';
import '../assets/css/content.css'
import { toast } from 'react-toastify';
import Context from '../store/Context';
function TaskComponets(props) {
    const { name, start, end, status, important, id, removeTodo  } = props;
    const handleRemove = async (id) => {
        try {
            const response = await deleteTodo(id);
            if (response.data && response.status == 200) {
                toast.success(response.data.message)
                removeTodo(id);
                return;
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            return;
        }
    }
    return (
        <CardGroup className='card-todo mb-3'>
            <Card>
                <CardBody>
                    <FormGroup className='d-flex justify-content-between'>
                        <div>
                            {
                                status == "Done" ?
                                    <>
                                        <Input type="checkbox" defaultChecked disabled />
                                        <Label check style={{ fontWeight: 'bold', marginLeft: 10, textTransform: "uppercase", textDecoration: "line-through" }}>
                                            <Link className='name_task' to={`/task/${id}/`}>{name}</Link>
                                        </Label>
                                    </>
                                    :
                                    <>
                                        <Input type="checkbox" disabled />
                                        <Label style={{ fontWeight: 'bold', marginLeft: 10 }}>
                                            <Link className='name_task' to={`/task/${id}/`}>{name}</Link>
                                        </Label>
                                    </>
                            }
                        </div>
                        <div>
                            {
                                important === "Yes" ? <i className="fa-solid fa-star" style={{ fontSize: 22, color: '#0dcaf0' }}></i> : null
                            }
                        </div>
                    </FormGroup>
                    <hr />
                    <div className='mt-3 d-flex justify-content-between'>
                        <span className='align-self-center'>Start date: {start} - End date: {end} - Status: {status}</span>
                        <div>
                            <i className="fa-solid fa-trash" style={{ fontSize: 22, color: '#0dcaf0', cursor: 'pointer' }} onClick={() => handleRemove(id)}></i>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </CardGroup>
    )
}

export default TaskComponets;