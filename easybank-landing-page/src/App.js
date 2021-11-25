import './App.css';
import Header from './components/Header';
import LatestArticles from './components/LatestArticles';
import WhySection from './components/WhySection';

const App = () => {
  return (<>
    <Header />
    <main>
      <WhySection />
      <LatestArticles />
    </main>
  </>);
}

export default App;
