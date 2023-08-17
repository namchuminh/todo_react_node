import React, { useState, useEffect } from 'react';

function DetailTaskList(props) {
    const { index, name, selected, handleCheckTask, done } = props;
    return (
        <>
            <li className="list-group-item mt-3">
                {
                    done ? 
                    <>
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            defaultValue=""
                            aria-label="..."
                            id={`task${index}`}
                            checked={true}
                        />
                    </>
                    :
                    <>
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            defaultValue=""
                            aria-label="..."
                            id={`task${index}`}
                            defaultChecked={selected}
                            onChange={() => handleCheckTask(index)}
                        />
                    </>
                }
                
                {
                    selected ? <label htmlFor={`task${index}`} style={{textDecoration: 'line-through', color: '#909294'}}>{name}</label> : <label htmlFor={`task${index}`} >{name}</label>
                }
                
            </li>
        </>
    )
}

export default DetailTaskList;