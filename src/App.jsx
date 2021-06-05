import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
        <>
          <Navbar />
          <Home />
          <Services />
          <Contact />
          <Footer />
        </>
  );
}

export default App;
