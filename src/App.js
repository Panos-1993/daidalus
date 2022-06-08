import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/header.js';
import Header from './components/header.js';
import Footer from './components/footer';
import Profitability from './components/Profitability';

function App() {
  return (
    <div className="App">
      <Header />
      <Profitability />
      <Footer />
    </div>
  );
}

export default App;
