import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Markazul Bayaan</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Dedicated to providing quality Islamic education and Quranic studies through personalized, one-on-one instruction.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/+5xdX-Dy2lKAwYWRk" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">
              <RiTelegramLine size={30}/>
              </a>
              <a href="https://www.instagram.com/markazulbayaanbenefits/" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaInstagram size={30}/>
              </a>
              <a href="https://whatsapp.com/channel/0029VarQvHiLY6d000oWu82O" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaWhatsapp size={30}/>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#course-details" className="text-gray-300 hover:text-white transition-colors duration-300">Course Details</a></li>
              <li><a href="#enroll" className="text-gray-300 hover:text-white transition-colors duration-300">Enrollment</a></li>
              <li><a href="https://bit.ly/rawdah-director" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Mail: markazulbayaan9@gmail.com</li>
              <li>Phone: +2348089287065</li>
              <li><a href="https://bit.ly/rawdah-director" target="_blank" className="hover:text-white transition-colors duration-300">Direct Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2025 Markazul Bayaan. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm">
              Transforming lives through Islamic education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 