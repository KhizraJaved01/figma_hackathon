import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';  
import { MdKeyboardArrowDown } from 'react-icons/md';  

const Footer = () => {  
    return (  
        <footer id="Contact" className="text-gray-600 body-font bg-gray-100">  
            <div className="container mx-auto px-5 py-12">  
                <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap text-center md:text-left">  
                    <div className="w-full md:w-1/4">  
                        <div className="text-2xl font-bold text-gray-800 mb-6">Hekto</div>  
                        <div className="mb-4">  
                            <input  
                                type="text"  
                                placeholder="Enter Email Address"  
                                className="bg-white w-full py-2 px-4 border border-gray-300 rounded-md"  
                            />  
                        </div>  
                        <div className="mb-4">  
                            <button className="w-full bg-pink-600 text-white py-2 rounded-md">  
                                Sign Up  
                            </button>  
                        </div>  
                        <div className="mb-4">  
                            <p>Contact Info</p>  
                            <p>Address: 17 Princess Road, London, Greater London NW1 8JR, UK</p>  
                        </div>  
                    </div>  
                    <div className="flex flex-col w-full md:w-2/3">  
                        <div className="flex justify-between mb-6">  
                            <div className="flex-1 mr-4">  
                                <h2 className="font-medium text-black mb-4">CATEGORIES</h2>  
                                <ul className="space-y-2">  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Laptops & Computers</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Cameras & Photography</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Smart Phones & Tablets</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Video Games & Consoles</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Waterproof Headphones</a></li>  
                                </ul>  
                            </div>  

                            <div className="flex-1 mr-4">  
                                <h2 className="font-medium text-black mb-4">CUSTOMER CARE</h2>  
                                <ul className="space-y-2">  
                                    <li><a href="#" className="text-gray-500 hover:text-black">My Account</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Discount</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Returns</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Orders History</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Order Tracking</a></li>  
                                </ul>  
                            </div>  

                            <div className="flex-1">  
                                <h2 className="font-medium text-black mb-4">PAGES</h2>  
                                <ul className="space-y-2">  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Blog</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Browse the Shop</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Category</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Pre-Built Pages</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">Visual Composer Elements</a></li>  
                                    <li><a href="#" className="text-gray-500 hover:text-black">WooCommerce Pages</a></li>  
                                </ul>  
                            </div>  
                        </div>  
                    </div>   
                </div>  
            </div>  

            <div className="border-t border-gray-700 py-4 mt-8">  
                <div className="container mx-auto flex justify-between text-center text-gray-500 flex-col sm:flex-row">  
                    <p>&copy; 2024 Hekto - All Rights Reserved</p>  
                </div>  
            </div>  

           
        </footer>  
    );  
};  

export default Footer;
