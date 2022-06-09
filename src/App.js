import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/header.js';
import Header from './components/header.js';
import Footer from './components/footer';
import Profitability from './components/Profitability';
import Liquidity from './components/liquidity';
import About from './components/about.js';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Profitability />
      <Liquidity />
      <Footer />
    </div>
  );
}

export default App;
