import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar, Content } from '../parts';
import { listTodo } from '../services/todoServices';
import { toast } from 'react-toastify';

function Home(props) {
    const [todo, setTodo] = useState([])
    const [todoSearch, setTodoSearch] = useState([])
    const [isSearching, setIsSearching] = useState(false)

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

    const handleSearch = (status, type, important) => {
        if(status == "" || type == "" || important == ""){
            toast.error("Vui lòng chọn thông tin tìm kiếm!")
            setIsSearching(false)
            return;
        }

        let listTodoSearch = [...todo.filter((item) => item.status === status && item.type === type && item.important == important)]
        setTodoSearch(listTodoSearch)
        setIsSearching(true)
        return;
    }

    const handleGetAll = () => {
        setIsSearching(false)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs="3" className='left-menu'>
                        <Sidebar handleSearch={handleSearch} handleGetAll={handleGetAll} isSearching={isSearching}/>
                    </Col>
                    <Col xs="9" className='main-content'>
                        <Content todo={todo} removeTodo={removeTodo} addTodoList={addTodoList} isSearching={isSearching} todoSearch={todoSearch}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;
