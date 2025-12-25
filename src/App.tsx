import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Portfolio from './components/home/Portfolio';
import Booking from './components/home/Booking';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <Booking />
    </Layout>
  );
}

export default App;
