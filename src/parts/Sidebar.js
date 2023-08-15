import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap'
import '../assets/css/sidebar.css'

function Sidebar(props) {
    return (
        <>
            <div className="sidebar">
                <Input type="text" placeholder="Search..." className="search-input" />
                <div>
                    <ul className="sidebar-menu">
                        <li>
                            <Button className='btn btn-info'>Filter by status <br />(done / in progress / todo)</Button>
                        </li>
                        <li>
                            <Button className='btn btn-info'>Filter by type <br />(work / personal)</Button>
                        </li>
                        <li>
                            <Button className='btn btn-info'>Filter by status <br />(done / in progress / todo)</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;