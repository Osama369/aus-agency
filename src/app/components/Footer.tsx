'use client'
import Image from "next/image"
function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 px-10 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <div>

            {/* <img src="/services/logo.jpg" alt="" /> */}
            <Image src={"/services/logo.jpg"} alt={"logo"}>
               
            </Image>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
             
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                 Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/aus-software-solution/"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>Hyderabad sindh, Pakistan</p>
            <p>Hyderabad</p>
            <p>Email: info.aussoftwaresolution@gmail.com</p>
            <p>Phone: +923144684607</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 AUS software solution. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer