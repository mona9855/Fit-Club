import './App.css';
import 'tailwindcss/tailwind.css'
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-appColor flex flex-col gap-24 overflow-hidden mix-blend-overlay bg-gymBg scroll-smooth">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
