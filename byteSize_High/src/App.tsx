import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Components
import HomePage from "./components/HomePage.jsx"
import Students from "./components/Students.jsx";
import Parents from './components/Parents.jsx';
import Levels from './components/Levels.jsx';


function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Special Ed Dashboard</h1>
                    <p>Enter Lafayette Portal</p>
                </header>

                <Routes>
                    <Route path="/home" element={<HomePage />} />  
                    {/* byteSize_High\src\components\Home.jsx */}
                    <Route path="/dashboard" element={<HomePage />} />  {/* Renaming to /dashboard for clarity */}
                </Routes>

                <footer>
                    <p>Developed with ❤️ for Lafayette</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
