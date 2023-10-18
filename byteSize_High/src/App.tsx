// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Components
import Students from './components/Students.js';
import Parents from './components/Parents.js';
import Levels from './components/Levels.js';

function App() {
    // Example student data
    const studentData = {
        name: 'Raul',
        age: 12,
        grade: "4th grade",
        level: 2
    }

    return (
        <Router>
            <div>
                <header>
                    <h1>Special Education Dashboard</h1>
                    <p>Enter Lafayette Portal.</p>
                </header>

                <Routes>
                    <Route path="/" element={<div>
                        <Students studentInfo={studentData} />
                        <Parents />
                        <Levels />
                    </div>} />
                </Routes>

                <footer>
                    <p>Developed with ❤️ for Lafayette</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
