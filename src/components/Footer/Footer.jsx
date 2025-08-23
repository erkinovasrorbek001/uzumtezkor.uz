import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import darkLogo from '../../assets/Delgo-03.png'
import lightLogo from '../../assets/Delgo-01.png'
import './Footer.css'

function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

 
  const logoSrc = isDarkMode ? darkLogo : lightLogo;


  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

   
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Footer bg-white dark:bg-[#12121f] duration-1000 text-black dark:text-white py-10 px-4">
      <div className="Footer__container max-w-[1200px] mx-auto">
        <nav className="Footer__nav flex flex-col items-center text-center">
         
          <div className="Footer__logo mb-6">
            <img 
              className="mx-auto w-[150px] sm:w-[180px] md:w-[200px]"
              src={logoSrc}
              alt="Delgo logo"
            />
          </div>

          <address className="text-center dark:text-white text-[16px] sm:text-[18px] md:text-[20px] text-gray-800">
            <h1 className="Footer__text mb-2">
              Tel:{" "}
              <a className="text-[#2f3291] font-semibold hover:text-[#2f3291] dark:hover:text-[#2f3291] transition-colors" href="tel:+998977030513">
                +998977030513
              </a>{" "}
              | Email:{" "}
              <a className="text-[#2f3291] font-semibold hover:text-[#2f3291] dark:hover:text-[#2f3291] transition-colors" href="mailto:windowsa786@gmail.com">
                windowsa786@gmail.com
              </a>
            </h1>
            <p className="Footer_text mb-3 px-2">
              Manzil: O'zbekiston, Toshkent sh. 
              <br />
              IP MCHJ «Delgo»
            </p>
            <p className="Footer__write">
              <Link className="text-[#2f3291] font-semibold hover:text-[#2f3291] dark:hover:text-[#2f3291] transition-colors" to="/Shartnoma">
                Foydalanuv shartnomasi
              </Link>
            </p>
          </address>

          
        </nav>
      </div>
    </div>
  )
}

export default Footer