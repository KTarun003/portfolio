import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Projects from "./pages/projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <main className="page landing-page">
        <Router >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    </main>  );
}

export default App;
