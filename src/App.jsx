import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Project';
import Aboutme from './components/About Me';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavHeader />
      <Projects />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
