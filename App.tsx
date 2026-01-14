import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden selection:bg-blue-200 dark:selection:bg-cyan-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;