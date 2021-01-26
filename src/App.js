import './App.css';
import CartSummary from './components/CartSummary';
import ContactInformation from './components/ContactInformation';
import ShippingAddress from './components/ShippingAddress';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="flex flex-col md:flex-row md:justify-around md:px-24 px-3 pt-10 text-gray-600">
        <h1 className="font-bold md:text-3xl text-2xl md:pr-36 mb-5">Checkout</h1>
        <span></span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:px-20 px-3 pt-10 text-gray-600">
        <CartSummary/>
        <form action="" method="post">
          <ContactInformation/>
          <ShippingAddress/>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
