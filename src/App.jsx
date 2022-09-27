import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Project';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavHeader />
      <Projects />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;