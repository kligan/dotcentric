import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

function App() {
  return (
        <Router>
            <Route path="/">
                <Navbar />
                <Home />
                <Services />
                <Contact />
                <Footer />
            </Route>
        </Router>
  );
}

export default App;
