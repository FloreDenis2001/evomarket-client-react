import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Provider store={store}>
    <div className="App">
      <Header/> 
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/product/:productSKU' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
    </Provider>
  );
}

export default App;
