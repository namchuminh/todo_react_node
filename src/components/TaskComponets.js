import React, { useState, useEffect } from 'react';
import { Card, FormGroup, Input, Label, CardBody, CardGroup } from 'reactstrap'
import '../assets/css/content.css'
function TaskComponets(props) {
    return (
        <CardGroup className='card-todo'>
            <Card>
                <CardBody>
                    <FormGroup className='d-flex justify-content-between'>
                        <div>
                            <Input type="checkbox" />
                            <Label check style={{ fontWeight: 'bold', marginLeft: 10 }}>
                                Task
                            </Label>
                        </div>
                        <div>
                            <i class="fa-solid fa-star" style={{ fontSize: 22, color: '#0dcaf0' }}></i>
                        </div>
                    </FormGroup>
                    <hr />
                    <div className='mt-3 d-flex justify-content-between'>
                        <span className='align-self-center'>Date end</span>
                        <div>
                            <i class="fa-solid fa-trash" style={{ fontSize: 22, color: '#0dcaf0' }}></i>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </CardGroup>
    )
}

export default TaskComponets;