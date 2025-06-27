import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allBooks from '../data/bookData';

const CheckoutPage = () => {
  const { bookId } = useParams(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
    let foundBook = null;
    for (const genre in allBooks) {
      const match = allBooks[genre].find(b => b.id === bookId);
      if (match) {
        foundBook = match;
        break;
      }
    }
    setBook(foundBook);
  }, [bookId]);

  if (!book) return <div className="text-center py-20">Loading book details...</div>;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully! (This is a demo)");
  };

  const inputStyles = "mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary";
  const labelStyles = "text-sm font-medium text-text-light";

  return (
    <div className="bg-light-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold text-primary mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Forms */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Shipping Address</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className={labelStyles}>Full Name</label>
                  <input type="text" id="name" name="name" className={inputStyles} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="address" className={labelStyles}>Street Address</label>
                  <input type="text" id="address" name="address" className={inputStyles} placeholder="123 Bookworm Lane" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className={labelStyles}>City</label>
                    <input type="text" id="city" name="city" className={inputStyles} placeholder="Lahore" />
                  </div>
                  <div>
                    <label htmlFor="state" className={labelStyles}>State / Province</label>
                    <input type="text" id="state" name="state" className={inputStyles} placeholder="Punjab" />
                  </div>
                  <div>
                    <label htmlFor="zip" className={labelStyles}>ZIP / Postal Code</label>
                    <input type="text" id="zip" name="zip" className={inputStyles} placeholder="54000" />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Payment Details</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className={labelStyles}>Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" className={inputStyles} placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className={labelStyles}>Expiry Date</label>
                    <input type="text" id="expiry" name="expiry" className={inputStyles} placeholder="MM / YY" />
                  </div>
                  <div>
                    <label htmlFor="cvc" className={labelStyles}>CVC</label>
                    <input type="text" id="cvc" name="cvc" className={inputStyles} placeholder="123" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-md sticky top-28">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Order Summary</h2>
              <div className="flex items-center space-x-4 border-b border-border-color pb-4">
                <img src={book.imageUrl} alt={book.title} className="w-20 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="font-bold text-text-dark">{book.title}</h3>
                  <p className="text-sm text-text-light">{book.author}</p>
                </div>
              </div>
              <div className="space-y-2 mt-4 text-text-light">
                <div className="flex justify-between"><span>Subtotal</span><span>${book.price.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>$5.00</span></div>
                <div className="flex justify-between font-bold text-text-dark text-lg border-t border-border-color pt-2 mt-2"><span>Total</span><span>${(book.price + 5).toFixed(2)}</span></div>
              </div>
              <button onClick={handlePlaceOrder} className="w-full mt-6 bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-opacity">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
