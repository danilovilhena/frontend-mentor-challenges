import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestArticles from './components/LatestArticles';
import WhySection from './components/WhySection';
import Introduction from './components/Introduction';

const App = () => {
  return (<>
    <Header />
    <main>
      <Introduction />
      <WhySection />
      <LatestArticles />
    </main>
    <Footer />
  </>);
}

export default App;
