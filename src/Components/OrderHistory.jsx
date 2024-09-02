import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ item }) => {
  const { title, thumbnail, price, quantity } = item;
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center">
        <img
          src={thumbnail}
          alt="Product"
          className="w-20 h-20 rounded-md object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">Qty: {quantity}</p>
        </div>
      </div>
      <p className="text-gray-500">₹{price.toFixed(2)}</p>
      <p className="text-xl font-semibold">₹{totalPrice}</p>
    </div>
  );
};

const ViewYourOrdersPage = () => {
  const orders = [
    {
      id: 1,
      title: "Product 1",
      thumbnail: "https://via.placeholder.com/150",
      price: 299.99,
      quantity: 2,
    },
    {
      id: 2,
      title: "Product 2",
      thumbnail: "https://via.placeholder.com/150",
      price: 499.99,
      quantity: 1,
    },
    // Add more items as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-lime-500 mb-6 text-center">
          Your Orders
        </h1>
        {orders.length > 0 ? (
          orders.map((item) => <OrderItem key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-lime-500 text-white px-6 py-2 rounded-md hover:bg-lime-600 flex items-center"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewYourOrdersPage;
