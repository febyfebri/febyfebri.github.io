import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import Lottie from 'react-lottie';
import Loading from './assets/loading.json';
import './App.css';
import { useState } from 'react';
import Project from './pages/Project';
import Interested from './pages/Interested';
import Footer from './pages/Footer';

function App() {

  const [isLoading, setLoading] = useState(true);

  const loadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  setTimeout(() => {
    setLoading(false)
  },6000)

  return (
    <div>
    {isLoading ? (
      <Lottie options={loadingAnimation} height={200} width={200} />
    ) : (
      <div>
        <div className='container mx-auto px-44 max-lg:px-0 max-md:px-3 max-xl:px-32'>
          <Navbar />
          <Hero />
          <Project />
          <Interested />
        </div>
        <Footer />
      </div>
    )}
  </div>
  );
}

export default App;
