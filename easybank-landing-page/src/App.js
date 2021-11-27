import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestArticles from './components/LatestArticles';
import WhySection from './components/WhySection';

const App = () => {
  return (<>
    <Header />
    <main>
      <WhySection />
      <LatestArticles />
    </main>
    <Footer />
  </>);
}

export default App;
