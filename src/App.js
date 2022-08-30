import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <main className="page landing-page">
        <Router >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </main>  );
}

export default App;
