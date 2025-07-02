import { Link } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div className="relative z-10 bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-500 text-white scroll-smooth min-h-screen">
        
        <nav className="fixed w-full flex justify-center p-6 bg-transparent z-10">
          {['Home','About','Experience','Skills','Contact'].map(sec => (
            <Link key={sec} to={sec.toLowerCase()} smooth duration={500}
                  className="mx-4 cursor-pointer hover:underline">
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
        </nav>

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}


export default App;
