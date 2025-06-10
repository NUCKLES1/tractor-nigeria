import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 absolute left-0 w-full text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4">TractorNigeria</div>
              <p className="text-gray-400 mb-4">
                Revolutionizing agriculture with next-generation tractor technology for a sustainable future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a>
                </li>
                <li>
                  <a href="#buy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Buy Tractors</a>
                </li>
                <li>
                  <a href="#rent" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Rent Tractors</a>
                </li>
                <li>
                  <a href="#service" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Service & Repairs</a>
                </li>
                <li>
                  <a href="#support" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Knowledge Base</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">User Manuals</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Video Tutorials</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Service Centers</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Warranty Information</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                  <span>1234 Innovation Drive<br />Tech Valley, CA 94123<br />United States</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-gray-400"></i>
                  <span>+1 (800) 555-0123</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-gray-400"></i>
                  <span>info@tractornigeria.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2025 TractorNigeria. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">Cookie Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">Sitemap</a>
              </div>
              
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <span className="text-sm text-gray-500">Payment Methods:</span>
                <i className="fab fa-cc-visa text-gray-400 text-xl"></i>
                <i className="fab fa-cc-mastercard text-gray-400 text-xl"></i>
                <i className="fab fa-cc-amex text-gray-400 text-xl"></i>
                <i className="fab fa-cc-paypal text-gray-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer