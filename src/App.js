import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/header.js';
import Header from './components/header.js';
import Footer from './components/footer';
import Profitability from './components/Profitability';
import Liquidity from './components/liquidity';
import Activity from './components/Activity';
import Risk from './components/Risk';
import About from './components/about.js';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Profitability />
      <Liquidity />
      <Activity />
      <Risk />
      <Footer />
    </div>
  );
}

export default App;
