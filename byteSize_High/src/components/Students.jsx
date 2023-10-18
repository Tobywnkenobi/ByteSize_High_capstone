import React, { useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(data => {
            setStudents(data);
        })
    }, [])

    return (
        <div>
        <h2>Students</h2>
        {students.map(student => (
            <div key={student.id}>
                <h3>{student.name}</h3>
                {/* Add other details here */}
            </div>
        ))}
    </div>
);
}

export default Students;