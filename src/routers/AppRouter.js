import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Home } from '../components/ui/home/Home';
import { Projects } from '../components/ui/projects/Projects';
import { Skills } from '../components/ui/skills/Skills';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/portafolio/" element={ <Home /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/skills" element={ <Skills /> } />
                    <Route path="/" element={ <Home /> } />
                </Routes>
            </Router>
        </>
    )
}