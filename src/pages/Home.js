import React  from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar, Content } from '../parts';

function Home(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col xs="3" className='left-menu'>
                        <Sidebar />
                    </Col>
                    <Col xs="9" className='main-content'>
                        <Content/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;
