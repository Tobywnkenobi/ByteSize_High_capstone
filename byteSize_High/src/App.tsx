import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Components
import Students from './components/Students.jsx';
import Parents from './components/Parents.jsx';
import Levels from './components/Levels.jsx';

function HomePage() {
    const studentData = {
        name: 'Raul',
        age: 12,
        grade: "4th grade",
        level: 2
    }

    return (
        <div>
            <Students studentInfo={studentData} />
            <Parents />
            <Levels />
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Special Ed Dashboard</h1>
                    <p>Enter Lafayette Portal</p>
                </header>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>

                <footer>
                    <p>Developed with ❤️ for Lafayette</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
