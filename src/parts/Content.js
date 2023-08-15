import React, { useState, useEffect } from 'react';
import { CardHeader } from 'reactstrap'
import { TaskComponets, AddTaskComponets } from '../components';
function Content(props) {
    const [showModal, setShowMotal] = useState(false)
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
            <TaskComponets/>
            <AddTaskComponets showModal={showModal} hideModal={hideModal} />
        </div>
    )
}

export default Content;