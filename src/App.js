import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Booking from './components/Booking'
import Services from "./components/Services";
import SeeDo from "./components/SeeDo";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar className='app__navbar'/>
      <Header />
      <Booking />
      <About />
      <Services />
      <Gallery />
      <SeeDo className='seedoo'/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
