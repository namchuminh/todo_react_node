import React, { useState, useEffect, useContext } from 'react';
import { CardHeader } from 'reactstrap'
import { TaskComponets, AddTaskComponets } from '../components';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const dateNow = `${year}-${month}-${day}`;

function Content(props) {
    const [showModal, setShowMotal] = useState(false)
    const {todo, removeTodo, addTodoList} = props;
    const hideModal = () => {
        setShowMotal(false)
    }

    return (
        <div>
            <CardHeader className='d-flex justify-content-between mb-3'>
                <h4>Today</h4>
                <i className="fa-solid fa-circle-plus" style={{ fontSize: 30, color: '#0dcaf0', cursor: 'pointer' }} onClick={(e) => setShowMotal(!showModal)}></i>
            </CardHeader>
            <hr />
            {
                todo.map((item, index) => {
                    if(item.end == dateNow){
                        return <TaskComponets removeTodo={removeTodo} key={index} name={item.name} end={item.end} status={item.status} start={item.start} important={item.important} id={item.id} />
                    }
                })
            }
            <CardHeader className='d-flex justify-content-between mb-3'>
                <h4>Overdue</h4>
            </CardHeader>
            {
                todo.map((item, index) => {
                    if(dateNow > item.end && item.status != "Done"){
                        return <TaskComponets removeTodo={removeTodo} key={index} name={item.name} end={item.end} status={item.status} start={item.start} important={item.important} id={item.id} />
                    }
                })
            }
            <CardHeader className='d-flex justify-content-between mb-3'>
                <h4>List</h4>
            </CardHeader>
            {
                todo.map((item, index) => {
                    return <TaskComponets removeTodo={removeTodo} key={index} name={item.name} end={item.end} status={item.status} start={item.start} important={item.important} id={item.id} />
                })
            }
            <AddTaskComponets addTodoList={addTodoList} showModal={showModal} hideModal={hideModal} />
        </div>
    )
}

export default Content;