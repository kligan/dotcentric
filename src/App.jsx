import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
