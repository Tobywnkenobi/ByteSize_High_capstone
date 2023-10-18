import React from 'react';
import { Link } from 'react-router-dom';
import Students from './Students.jsx';
import Parents from './Parents.jsx';
import Levels from './Levels.jsx';


function HomePage() {
    const studentData = {
        name: 'Raul',
        age: 12,
        grade: "4th grade",
        level: 2
    }

    return (
        <div>
            <h2>Welcome to the Lafayette Dashboard</h2>
            <p>This dashboard provides insights and management tools for levels at Lafayette.</p>
            <Link to="/students">View All Students</Link>
            <Students studentInfo={studentData} />
            <Parents />
            <Levels />
        </div>
    );
}

export default HomePage;
