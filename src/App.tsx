import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductAddForm from "./components/Product/ProductAddForm";
import ProductRemoveForm from "./components/Product/ProductRemoveForm";
import ShoppingBag from "./components/Bag/ShoppingBag";
import Favourite from "./components/Favourite/Favourite";
import Checkout from "./components/Checkout/Checkout";
import { NavigationLeftBarProvider } from "./components/Navigation/NavigationLeftBarProvider";
import Login from "./components/User/Login";
import LoginProvider from "./context/LoginProvider";
import Register from "./components/User/Register";
import MyAccount from "./components/User/MyAccount";

function App() {
  return (
    <Provider store={store}>
      <NavigationLeftBarProvider>
        <LoginProvider>
          <div className="App">
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:productSKU" element={<ProductPage />} />
                <Route path="/product/add" element={<ProductAddForm />} />
                <Route
                  path="/product/edit/:productSKU"
                  element={<ProductRemoveForm />}
                />
                <Route path="/shopping-cart" element={<ShoppingBag />} />
                {/* <Route path="/favourite" element={<Favourite />} /> */}
                <Route path="/my-account" element={<MyAccount/>} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </LoginProvider>
      </NavigationLeftBarProvider>
    </Provider>
  );
}

export default App;
