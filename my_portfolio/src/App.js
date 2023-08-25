import './App.scss';
import Header from './components/common/Header';
import About from './components/layouts/About';
import Contact from './components/layouts/Contact';
import Education from './components/layouts/Education';
import Home from './components/layouts/Home';
import Projects from './components/layouts/Projects';
function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <main>
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
