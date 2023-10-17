import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Students(props) {
    return (
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body>
            <Card.Title>{props.studentInfo.name}</Card.Title>
            <Card.Text>
                <strong>Age:</strong> {props.studentInfo.age}<br />
                <strong>Grade:</strong> {props.studentInfo.grade}<br />
                <strong>level:</strong> {props.studentInfo.level}
            </Card.Text>
            <Button variant="primary">View Student Profile</Button>
        </Card.Body>
       </Card>
    );
}

export default Students;