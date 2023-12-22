import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
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
import BillingDetailsProvider from "./context/BillingDetailsProvider";
import { PersistGate } from "redux-persist/integration/react";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationLeftBarProvider>
          <BillingDetailsProvider>
            <LoginProvider>
              <div className="App">
                <BrowserRouter>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/product/:productSKU"
                      element={<ProductPage />}
                    />
                    <Route path="/product/add" element={<ProductAddForm />} />
                    <Route
                      path="/product/edit/:productSKU"
                      element={<ProductRemoveForm />}
                    />
                    <Route path="/panel" element={<AdminPanel />} />
                    <Route path="/shopping-cart" element={<ShoppingBag />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </div>
            </LoginProvider>
          </BillingDetailsProvider>
        </NavigationLeftBarProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
