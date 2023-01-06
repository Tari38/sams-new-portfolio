import './App.css';
import { About, Projects, Training, Technical } from "./containers/index.js";
import Header from './components/Header';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Training />
      <Projects />
      <Technical />
      <Footer />      
    </div>
  );
}

export default App;
