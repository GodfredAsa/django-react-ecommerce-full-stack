import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/orders/:id" element={<OrderScreen />} />

            {/* ADMIN ROUTES */}
            <Route path="/admin/userlist" element={<UserListScreen />} />
            {/* <Route path="/login" element={cartItems.length < 1 ? <LoginScreen />:<CartScreen /> }></Route> */}

            {/* pattern /cart/:id means the id is optional  */}
            {/* implements multiple routes in a nested format */}
            <Route path="/">
              <Route path="cart/:id" element={<CartScreen />} />
              <Route path="cart" element={<CartScreen />} />
            </Route>

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
