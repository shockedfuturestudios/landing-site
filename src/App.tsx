import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';


export default function App() {
  return (
    <div className="bg-black min-h-screen text-foreground">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Games />
              <Contact />
            </>
          }
        />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
