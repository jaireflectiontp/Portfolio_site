import "./App.scss";
import About from "./components/layouts/About/About";
import Contact from "./components/layouts/Contact/Contact";
import Education from "./components/layouts/Education/Education";
import HomePage from "./components/layouts/Home/HomePage";
import Nav from "./components/layouts/Nav/Nav";
import Projects from "./components/layouts/Projects/Projects";

function App() {
  return (
    <div className="app-container">
      <header>
        <Nav />
      </header>
      <main>
        <HomePage />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer>
        Design & Built by Jay Rautel
      </footer>
    </div>
  );
}

export default App;
