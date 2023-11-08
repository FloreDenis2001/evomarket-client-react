import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductModal from './pages/ProductModal';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <ProductModal/>
      <Footer/>
      
    </div>
  );
}

export default App;
