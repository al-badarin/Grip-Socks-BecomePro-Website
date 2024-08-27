import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import OrderForm from './components/OrderForm/OrderForm';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <OrderForm />
      <Testimonials />
      <FAQ />
      <Footer />
      {/* todo: add routing? */}
      {/* todo: add 404 page */}
    </>
  );
}

export default App;
