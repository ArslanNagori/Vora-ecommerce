import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-gray-200 px-8 py-16 mt-16">
      <div className="grid grid-cols-4 gap-12 max-w-6xl mx-auto">

        <div>
          <h3 className="text-base font-medium text-gray-900 mb-4 tracking-wide">VORA.</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Simple things. Better choices.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-4 tracking-wide uppercase">Shop</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/products" className="text-xs text-gray-500 hover:text-black transition-colors">All Products</Link></li>
            <li><Link to="/products" className="text-xs text-gray-500 hover:text-black transition-colors">Men</Link></li>
            <li><Link to="/products" className="text-xs text-gray-500 hover:text-black transition-colors">Women</Link></li>
            <li><Link to="/products" className="text-xs text-gray-500 hover:text-black transition-colors">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-4 tracking-wide uppercase">Support</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="text-xs text-gray-500 hover:text-black transition-colors">Contact Us</Link></li>
            <li><Link to="/" className="text-xs text-gray-500 hover:text-black transition-colors">Shipping Info</Link></li>
            <li><Link to="/" className="text-xs text-gray-500 hover:text-black transition-colors">Returns</Link></li>
            <li><Link to="/" className="text-xs text-gray-500 hover:text-black transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-4 tracking-wide uppercase">Account</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/login" className="text-xs text-gray-500 hover:text-black transition-colors">Login</Link></li>
            <li><Link to="/wishlist" className="text-xs text-gray-500 hover:text-black transition-colors">Wishlist</Link></li>
            <li><Link to="/cart" className="text-xs text-gray-500 hover:text-black transition-colors">Cart</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-14 pt-6 max-w-6xl mx-auto text-center">
        <p className="text-[11px] text-gray-400 tracking-wide">© 2026 VORA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;