import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Globe } from 'lucide-react';
import darkLogo from '../../assets/Delgo-03.png'; 
import lightLogo from '../../assets/Delgo-01.png'; 
import './Wrapper.css'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { indigo } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import i18n from '../../content/i18';

const DarkBlueSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: indigo[300],
    '&:hover': {
      backgroundColor: alpha(indigo[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: indigo[600],
  },
}));

function Wrapper() {
  const [selectedLanguage, setSelectedLanguage] = useState('uzb');
  const [toggleControl, setToggleControl] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Logoni modega qarab o'zgartiramiz
  const logoSrc = isDarkMode ? darkLogo : lightLogo;

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const {t} = useTranslation();
  
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='fixed w-full z-50 bg-white dark:bg-[#2d328e] dark:text-white text-black duration-700 '>
      <div className='max-w-[1200px] mx-auto px-4'>
        <nav className='flex items-center justify-between py-4'>
          
          <RouterLink to="/">
            <img src={logoSrc} alt="Logo" className="w-[150px]" />
          </RouterLink>

          <ul className='hidden md:flex items-center gap-10'>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="Afzal" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#2d328e] dark:hover:text-gray-300 transition">
                {t("Afzalliklar")}
              </ScrollLink>
            </li>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="ishlash" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#2d328e] dark:hover:text-gray-300 transition">
                {t("Biz bilan ishlash")}
              </ScrollLink>
            </li>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="faq" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#2d328e] dark:hover:text-gray-300 transition">
                {t("Savollar va Javoblar")}
              </ScrollLink>
            </li>
          </ul>

          <div className='hidden md:flex items-center gap-6'>
            <DarkBlueSwitch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
            
            {/* Til tanlovi */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <Globe className="h-4 w-4 text-gray-500 dark:text-gray-300 group-hover:text-[#2d328e] dark:group-hover:text-white transition-colors" />
              </div>
              <select 
                value={selectedLanguage}
                onChange={handleChange}
                className="pl-10 pr-8 py-2 bg-transparent border-b-2 dark:bg-[#2d328e] border-gray-300 dark:border-gray-400 uppercase outline-none text-black dark:text-white appearance-none cursor-pointer transition-all hover:border-[#2d328e] focus:border-[#2d328e] dark:hover:border-white dark:focus:border-white"
              >
                <option value="uzb">UZB</option>
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500 dark:text-gray-300 group-hover:text-[#2d328e] dark:group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

          
            <RouterLink to="/contact">
              <button className="relative overflow-hidden px-6 py-3 font-bold rounded-full border-2 border-[#2d328e] dark:border-white bg-white dark:bg-[#2d328e] text-[#2d328e] dark:text-white hover:bg-[#2d328e] dark:hover:bg-white hover:text-white dark:hover:text-[#2d328e] transition-all duration-500 group">
                <span className="relative z-10">{t("Kuryer bo'lish")}</span>
                <span className="absolute inset-0 bg-[#2d328e] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></span>
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
          <div className='md:hidden bg-white dark:bg-[#2d328e] p-4 space-y-4 shadow-lg rounded-lg mt-2 border border-gray-200 dark:border-gray-600'>
            <ul className="space-y-3">
              <li className='py-2 border-b border-gray-100 dark:border-gray-600'>
                <ScrollLink to="Afzal" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block text-lg font-medium hover:text-[#2d328e] dark:hover:text-gray-300 transition-colors">
                  {t("Afzalliklar")}
                </ScrollLink>
              </li>
              <li className='py-2 border-b border-gray-100 dark:border-gray-600'>
                <ScrollLink to="ishlash" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block text-lg font-medium hover:text-[#2d328e] dark:hover:text-gray-300 transition-colors">
                  {t("Biz bilan ishlash")}
                </ScrollLink>
              </li>
              <li className='py-2 border-b border-gray-100 dark:border-gray-600'>
                <ScrollLink to="faq" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block text-lg font-medium hover:text-[#2d328e] dark:hover:text-gray-300 transition-colors">
                  {t("Savollar va Javoblar")}
                </ScrollLink>
              </li>
            </ul>
            
            <div className='flex items-center justify-between py-3'>
              <span className='font-medium dark:text-white'>Dark Mode</span>
              <DarkBlueSwitch checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
            </div>
            
            <div className="relative group pt-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <Globe className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              </div>
              <select 
                value={selectedLanguage}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-400 uppercase outline-none text-black dark:text-white appearance-none cursor-pointer transition-all hover:border-[#2d328e] focus:border-[#2d328e] dark:hover:border-white dark:focus:border-white"
              >
                <option value="uzb">UZB</option>
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
              </select>
            </div>
            
            <RouterLink to="/contact" className='block pt-4'>
              <button onClick={() => setToggleControl(false)} className="w-full relative overflow-hidden px-5 py-3 font-bold rounded-full border-2 border-[#2d328e] dark:border-white bg-white dark:bg-[#2d328e] text-[#2d328e] dark:text-white hover:bg-[#2d328e] dark:hover:bg-white hover:text-white dark:hover:text-[#2d328e] transition-all duration-500 group">
                <span className="relative z-10">{t("Kuryer bo'lish")}</span>
                <span className="absolute inset-0 bg-[#2d328e] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></span>
              </button>
            </RouterLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wrapper;