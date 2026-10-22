import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/studio/Header";
import { Hero } from "./components/studio/Hero";
import { Work } from "./components/studio/Work";
import { About } from "./components/studio/About";
import { Contact } from "./components/studio/Contact";
import { FilmDialog } from "./components/studio/FilmDialog";
import type { PortfolioWork } from "./data/portfolio";

function Portfolio() {
  const [activeFilm, setActiveFilm] = useState<PortfolioWork | null>(null);
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero onPlay={setActiveFilm} />
        <Work onPlay={setActiveFilm} />
        <About />
        <Contact />
      </main>
      <FilmDialog film={activeFilm} onClose={() => setActiveFilm(null)} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
