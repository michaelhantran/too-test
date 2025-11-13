import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Tools from './pages/Tools';
import Products from './pages/Products';
import Support from './pages/Support';
import About from './pages/About';
import TextToVideoApps from "../pages/TextToVideoApps";
import { Page } from './types';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Education':
        return <Education onNavigate={handleNavigate} />;
      case 'Tools':
        return <Tools onNavigate={handleNavigate} />;
      case 'Products':
        return <Products onNavigate={handleNavigate} />;
      case 'Support':
        return <Support />;
      case 'About':
        return <About />;
      case 'TextToVideo':
        return <TextToVideoApps />;
      case 'Home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
