import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import MeniuBar from './components/ui/MeniuBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
