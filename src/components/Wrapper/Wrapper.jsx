import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Switch from '../../content/Switch';
import { Moon, Sun, Globe } from "lucide-react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import darkLogo from '../../assets/Delgo-03.png';
import lightLogo from '../../assets/Delgo-01.png';
import './Wrapper.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../content/i18';


function Wrapper() {
  const [selectedLanguage, setSelectedLanguage] = useState('uzb');
  const [toggleControl, setToggleControl] = useState(false);

 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode]);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      setSelectedLanguage(savedLang);
    }
  }, []);
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const logoSrc = isDarkMode ? darkLogo : lightLogo;
  const { t } = useTranslation();

  return (
    <div className='fixed w-full z-50 bg-white dark:bg-[#12121f] dark:text-white text-[#12121f] duration-700'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <nav className='flex flex-wrap items-center justify-between py-4'>
          <RouterLink to="/">
            <img src={logoSrc} alt="Logo" className="w-[150px]" />
          </RouterLink>

     
          <ul className='hidden md:flex items-center gap-10 max-w-[600px] flex-shrink'>
            {['Afzal', 'ishlash', 'faq'].map((id, index) => (
              <li key={index} className='Wrapper__item text-[18px] font-semibold whitespace-nowrap'>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  className="cursor-pointer hover:text-[#12121f] dark:hover:text-gray-300 transition"
                >
                  {t(id === 'Afzal' ? "Afzalliklar" : id === 'ishlash' ? "Biz bilan ishlash" : "Savollar va Javoblar")}
                </ScrollLink>
              </li>
            ))}
          </ul>

        
          <div className='hidden md:flex items-center gap-6 flex-shrink-0'>
       
            <div>
             <Switch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
            </div>

         
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <Globe className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              </div>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="pl-10 pr-8 py-2 bg-transparent border-b-2 dark:bg-[#12121f] border-gray-300 dark:border-gray-400 uppercase outline-none text-black dark:text-white cursor-pointer max-w-[120px]"
              >
                <option value="uzb">UZB</option>
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
              </select>
            </div>

           
            <RouterLink to="/contact">
              <button className="relative overflow-hidden px-6 py-3 font-bold rounded-full border-2 border-[#12121f] dark:border-white bg-white dark:bg-[#12121f] text-[#12121f] dark:text-white hover:bg-[##12121f] dark:hover:bg-white hover:text-white dark:hover:text-[#12121f] transition-all duration-500 group whitespace-nowrap">
                <span className="relative z-10">{t("Kuryer bo'lish")}</span>
                <span className="absolute inset-0 bg-[#12121f] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></span>
              </button>
            </RouterLink>
          </div>

      
          <div className='md:hidden flex items-center'>
            {toggleControl ? (
              <MdClose onClick={() => setToggleControl(false)} size={33} className='cursor-pointer text-[#2d328e] dark:text-white' />
            ) : (
              <HiMiniBars3BottomRight onClick={() => setToggleControl(true)} size={30} className='cursor-pointer text-[#2d328e] dark:text-white' />
            )}
          </div>
        </nav>

    
        {toggleControl && (
          <div className='md:hidden bg-white dark:bg-[#12121e] p-4 space-y-4 shadow-lg rounded-lg mt-2 border border-gray-200 dark:border-gray-600'>
            <ul className="space-y-3">
              {['Afzal', 'ishlash', 'faq'].map((id, index) => (
                <li key={index} className='py-2 border-b border-gray-100 dark:border-gray-600'>
                  <ScrollLink
                    to={id}
                    smooth={true}
                    duration={700}
                    offset={-70}
                    onClick={() => setToggleControl(false)}
                    className="block text-lg font-medium hover:text-[#2d328e] dark:hover:text-gray-300"
                  >
                    {t(id === 'Afzal' ? "Afzalliklar" : id === 'ishlash' ? "Biz bilan ishlash" : "Savollar va Javoblar")}
                  </ScrollLink>
                </li>
              ))}
            </ul>

          
                <div>
               <Switch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
            </div>

          
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <Globe className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              </div>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full pl-10 pr-8 py-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-400 uppercase outline-none text-black dark:text-white dark:bg-[#12121e] cursor-pointer"
              >
                <option value="uzb">UZB</option>
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
              </select>
            </div>

        
            <RouterLink to="/contact" className='block pt-4'>
              <button onClick={() => setToggleControl(false)} className="w-full relative overflow-hidden px-5 py-3 font-bold rounded-full border-2 border-[#12121e] dark:border-white bg-white dark:bg-[#12121e] text-[#12121e] dark:text-white hover:bg-[#12121e] dark:hover:bg-white hover:text-white dark:hover:text-[#12121e] transition-all duration-500 group whitespace-nowrap">
                <span className="relative z-10">{t("Kuryer bo'lish")}</span>
                <span className="absolute inset-0 bg-[#12121e] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></span>
              </button>
            </RouterLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wrapper;
