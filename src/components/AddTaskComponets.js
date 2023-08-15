import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input, FormGroup, Label } from 'reactstrap';

function AddTaskComponets(props) {
    const { showModal, hideModal } = props;
    const [listNumber, setListNumber] = useState(1);
    const [name, setName] = useState('');
    const [decription, setDecription] = useState('')
    const [taskStatus, setTaskSattus] = useState('Todo');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [taskType, setTaskType] = useState('Work');
    const [taskImportant, setTaskImportant] = useState('Yes');

    const [inputValues, setInputValues] = useState(Array(listNumber).fill(''));

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleAddTodo = () => {
        console.log(inputValues);
        console.log(name)
        console.log(decription)
        console.log(taskStatus)
        console.log(startDate)
        console.log(endDate)
        console.log(taskType)
        console.log(taskImportant)
    };

    const renderDivList = () => {
        const inputList = [];

        for (let i = 0; i < listNumber; i++) {
            inputList.push(
                <Input
                    key={i}
                    className='mb-3'
                    id={`description-${i}`}
                    name={`text-${i}`}
                    placeholder={`Task ${i + 1}`}
                    value={inputValues[i]}
                    onChange={(e) => handleInputChange(i, e.target.value)}
                />
            );
        }

        return inputList;
    };

    const modalClose = () => {
        setListNumber(1)
        setName('')
        setDecription('')
        setTaskSattus('Todo')
        setStartDate('')
        setEndDate('')
        setTaskType('Work')
        setTaskImportant('Yes')
        setInputValues(Array(listNumber).fill(''))
        hideModal()
    }
    return (
        <div>
            <Modal isOpen={showModal} style={{ maxWidth: '60%', width: '100%' }}>
                <ModalHeader>Add Task - Todo List</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs="9">
                            <FormGroup>
                                <Label for="name">
                                    Task name
                                </Label>
                                <Input type="text" id='name' placeholder="Task name..." className="search-input" value={name} onChange={(e) => setName(e.target.value)} />
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
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="decription">
                                    List detail
                                </Label>
                                {renderDivList()}
                            </FormGroup>
                            <FormGroup className='d-flex justify-content-between'>
                                <Button color="success" style={{ color: 'white' }} onClick={() => setListNumber(listNumber + 1)} >Add more</Button>
                                {
                                    listNumber > 1 ? <Button color="success" style={{ color: 'white' }} onClick={() => setListNumber(listNumber - 1)} >Remove</Button> : null
                                }

                            </FormGroup>
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
                                        onChange={(e) => setTaskSattus(e.target.value)}
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
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" style={{ color: 'white' }} onClick={handleAddTodo}>
                        Add Task
                    </Button>{' '}
                    <Button color="secondary" onClick={modalClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddTaskComponets;