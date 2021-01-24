import './App.css';
import CartSummary from './components/CartSummary';

function App() {
  return (
    <div className="app">
      <div className="flex flex-col md:flex-row md:px-20 px-3 pt-10 text-gray-600">
        <h1 className="font-bold md:text-3xl text-2xl mb-5">Checkout</h1>
        <CartSummary />
      </div>
    </div>
  );
}

export default App;
