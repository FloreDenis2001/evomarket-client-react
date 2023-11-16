import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductModal from './pages/ProductModal';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (

    <Provider store={store}>
    <div className="App">
      <Header/>
      <Home/>
      {/* <ProductModal/> */}
      <Footer/>
      
    </div>
    </Provider>
  );
}

export default App;
