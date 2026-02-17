import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c2833] text-gray-200 py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
         <div>
          <h2 className="text-xl font-semibold text-white mb-3">e-shop</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop for all your needs. Shop with ease and experience the best online shopping experience.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-400">Home</a></li>
            <li><a href="#" className="hover:text-red-400">Shop</a></li>
            <li><a href="#" className="hover:text-red-400">Contact</a></li>
            <li><a href="#" className="hover:text-red-400">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-red-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-400"><FaGithub /></a>
            <a href="#" className="hover:text-red-400"><FaLinkedinIn /></a>
          </div>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 mt-6">
        <p>© 2024 e-shop. All rights reserved.</p>
        <div className="space-x-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-400">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-red-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
