import React from 'react';

import Students from './components/Students';
import Parents from './components/Parents';
import Levels from './components/Levels';

function App() {
    const studentData = {
        name: 'Raul',
        age: 12,
        grade: "4th grade",
        level: 2
    }

    return (
        <div>
            <header>
                <h1>Special Education Dashboard</h1>
                <p>Enter Lafayette Portal.</p>
            </header>

            <main>
                <Students studentInfo={studentData}/>
                <Parents />
                <Levels />
            </main>

            <footer>
                <p>Developed with ❤️ for Lafayette</p>
            </footer>
        </div>
    );
}

export default App;