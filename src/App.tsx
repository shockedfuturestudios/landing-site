import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <div className="bg-black min-h-screen text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
}
