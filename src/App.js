import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/header.js';
import Header from './components/header.js';
import Footer from './components/footer';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
