import { useContext } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowLeft, ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  const isEmpty = cart.length === 0;
  const shipping = cartTotal > 150 ? 0 : 10;
  const total = cartTotal + (isEmpty ? 0 : shipping);

  return (
    <div className="bg-[#F7F3EC] min-h-screen px-6 md:px-10 py-8">

      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-900 font-medium">Cart</span>
      </p>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#22211F] mb-1">Your Cart</h1>
        <p className="text-sm text-gray-600">Review your items and proceed to checkout.</p>
      </div>

      {!isEmpty && (
        <p className="text-sm font-medium text-gray-800 mb-4">{cart.length} items</p>
      )}

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
          <p className="text-sm text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
          <Link
            to="/products"
            className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Cart items */}
          <div className="flex-1 bg-white border border-[#D8D1C7] rounded-xl divide-y divide-[#E8DED0]">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg bg-[#F7F3EC]"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#22211F]">{item.title}</h3>
                  <p className="text-sm font-semibold text-[#22211F] mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Quantity</p>
                  <div className="flex items-center border border-[#D8D1C7] rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-[#F7F3EC] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-[#F7F3EC] transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-bold text-[#22211F] w-16 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-80 bg-white border border-[#D8D1C7] rounded-xl p-5 h-fit">
            <h2 className="text-lg font-semibold text-[#22211F] mb-4">Order Summary</h2>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className="border-t border-[#E8DED0] pt-4 flex justify-between items-center mb-1">
              <span className="text-base font-semibold text-[#22211F]">Total</span>
              <span className="text-lg font-bold text-[#22211F]">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">Shipping calculated at checkout.</p>

            <button className="w-full bg-[#1C1C1B] hover:bg-black text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Lock className="w-4 h-4" />
              Proceed to Checkout
            </button>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Secure Checkout</p>
                  <p className="text-xs text-gray-500">Your payment information is safe with us.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-500">Free shipping on orders over $150.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-4 h-4 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {!isEmpty && (
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 mt-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>
      )}
    </div>
  );
};

export default Cart;