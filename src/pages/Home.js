import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar, Content } from '../parts';
import { listTodo } from '../services/todoServices';

function Home(props) {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        getTodo();
    }, [])
    
    const removeTodo = (id) => {
        const filteredTodos = todo.filter((item) => item.id !== id);
        setTodo(filteredTodos);
    }
    
    const addTodoList = (newTodo) => {
        setTodo([newTodo, ...todo])
    }

    const getTodo = async () => {
        try {
            const response = await listTodo();
            if(response.data && response.status == 200){
                setTodo(response.data.todo)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs="3" className='left-menu'>
                        <Sidebar />
                    </Col>
                    <Col xs="9" className='main-content'>
                        <Content todo={todo} removeTodo={removeTodo} addTodoList={addTodoList}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;
