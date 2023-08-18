import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Input, FormGroup, Label, Container, Button } from 'reactstrap';
import { detailTodo, updateTodo } from '../services/todoServices';
import { DetailTaskList } from '../components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Task(props) {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [decription, setDecription] = useState('')
    const [taskStatus, setTaskSattus] = useState('Todo');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [taskType, setTaskType] = useState('Work');
    const [taskImportant, setTaskImportant] = useState('Yes');
    const [listTask, setListTask] = useState([]);

    const getData = async () => {
        try {
            const response = await detailTodo(id);
            if (response.data && response.status == 200) {
                setName(response.data.todo.name)
                setDecription(response.data.todo.decription)
                setTaskSattus(response.data.todo.status)
                setStartDate(response.data.todo.start)
                setEndDate(response.data.todo.end)
                setTaskType(response.data.todo.type)
                setTaskImportant(response.data.todo.important)
                setListTask(response.data.todo.list.split("#"))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckTask = (index) => {
        if (listTask[index].charAt(0) == "_") {
            const checkListTask = listTask;
            checkListTask[index] = listTask[index].substring(1);
            setListTask(checkListTask)
        } else {
            const checkListTask = listTask;
            checkListTask[index] = `_${listTask[index]}`;
            setListTask(checkListTask)
        }
    }

    const handleChangeStatus = (e) => {
        setTaskSattus(e.target.value)
    }

    const handleUpdateTodo = async () => {
        try {
            const response = await updateTodo(id, name, decription, taskStatus, taskType, taskImportant, startDate, endDate, listTask);
            if (response.data && response.status == 200) {
                setName(response.data.todo.name)
                setDecription(response.data.todo.decription)
                setTaskSattus(response.data.todo.status)
                setStartDate(response.data.todo.start)
                setEndDate(response.data.todo.end)
                setTaskType(response.data.todo.type)
                setTaskImportant(response.data.todo.important)
                setListTask(response.data.todo.list.split("#"))
                toast.success(response.data.message)
                return;
            }
        } catch (error) {
            toast.error(error.response.data.error)
            return;
        }

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container className='pt-4' style={{ background: '#f1f1f1', height: '100vh' }} >
            <div className='text-center'>
                <h2>Todo Detail - Task</h2>
            </div>
            <Row>
                <Col xs="9">
                    <FormGroup>
                        <Label for="name">
                            Task name
                        </Label>
                        <Input 
                            type="text" 
                            id='name' 
                            placeholder="Task name..." 
                            className="search-input" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            disabled={ taskStatus == "Done" ? true : false }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="decription">
                            Task decriptions
                        </Label>
                        <Input
                            id="decription"
                            name="text"
                            type="textarea"
                            rows={8}
                            value={decription}
                            onChange={(e) => setDecription(e.target.value)}
                            disabled={ taskStatus == "Done" ? true : false }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="decription">
                            List detail
                        </Label>
                    </FormGroup>
                    <ul className="list-group">
                        {
                            taskStatus == "Done" ? 
                                listTask.map((item, index) => {
                                    if (item.charAt(0) == "_") {
                                        return <DetailTaskList done={true} key={index} name={item.substring(1)} index={index} selected={true} handleCheckTask={handleCheckTask} />
                                    } else {
                                        return <DetailTaskList done={true} key={index} name={item} index={index} selected={false} handleCheckTask={handleCheckTask} />
                                    }
                                })
                            :
                                listTask.map((item, index) => {
                                    if (item.charAt(0) == "_") {
                                        return <DetailTaskList done={false} key={index} name={item.substring(1)} index={index} selected={true} handleCheckTask={handleCheckTask} />
                                    } else {
                                        return <DetailTaskList done={false} key={index} name={item} index={index} selected={false} handleCheckTask={handleCheckTask} />
                                    }
                                })
                        }
                    </ul>
                    <div className='d-flex justify-content-between'>
                        <Button className='mt-5 me-3'><Link to='/' style={{ fontWeight: 'unset', textDecoration: 'none' }}>Go Back</Link></Button>
                        <Button className='mt-5' onClick={() => handleUpdateTodo()} >Update Todo</Button>
                    </div>
                </Col>
                <Col xs="3">
                    <div>
                        <FormGroup>
                            <Label for="name">
                                Task status
                            </Label>
                            <Input
                                id="status"
                                name="select"
                                type="select"
                                value={taskStatus}
                                onChange={(e) => handleChangeStatus(e)}
                                disabled={ taskStatus == "Done" ? true : false }
                            >
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
                    </div>
                    <div>
                        <FormGroup>
                            <Label for="name">
                                Task type
                            </Label>
                            <Input
                                name="select"
                                type="select"
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value)}
                                disabled={ taskStatus == "Done" ? true : false }
                            >
                                <option>
                                    Work
                                </option>
                                <option>
                                    Personal
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup>
                            <Label for="name">
                                Task important
                            </Label>
                            <Input
                                name="select"
                                type="select"
                                value={taskImportant}
                                onChange={(e) => setTaskImportant(e.target.value)}
                                disabled={ taskStatus == "Done" ? true : false }
                            >
                                <option>
                                    Yes
                                </option>
                                <option>
                                    No
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Label for="exampleDatetime">
                            Start date
                        </Label>
                        <Input
                            id="exampleDatetime"
                            name="datetime"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            disabled={ taskStatus == "Done" ? true : false }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDatetime">
                            End date
                        </Label>
                        <Input
                            id="exampleDatetime"
                            name="datetime"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            disabled={ taskStatus == "Done" ? true : false }
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Task;