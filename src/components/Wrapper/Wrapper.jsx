import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';
import i18n from '../../content/i18';
import './Wrapper.css'
const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[300],
    '&:hover': {
      backgroundColor: alpha(pink[800], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));




function Wrapper() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const [toggleControl, setToggleControl] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

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
    const handlaChange = (event) =>{
      const selectedlenguage = event.target.value;
      i18n.changeLanguage(selectedlenguage)
    }
  return (
    <div className='Wrapper fixed w-full z-50 bg-white dark:bg-[#6d4aa5] dark:text-white text-black'>
      <div className='Wrapper__container max-w-[1200px] mx-auto'>
        <nav className='Wrapper__nav flex items-center justify-between py-4'>
          
      
          <RouterLink to="/">
            <img src="https://courier.uzumtezkor.uz/img/logo.svg" alt="Logo" className="w-[130px]" />
          </RouterLink>

       
          <ul className='Wrapper__list hidden md:flex items-center gap-10'>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="Afzal" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#6d4aa5] dark:hover:text-black transition">
                {t("Afzalliklar")}
              </ScrollLink>
            </li>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="ishlash" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#6d4aa5] dark:hover:text-black transition">
                {t("Biz bilan ishlash")}
              </ScrollLink>
            </li>
            <li className='Wrapper__item text-[18px] font-semibold'>
              <ScrollLink to="faq" smooth={true} duration={700} offset={-70} className="cursor-pointer hover:text-[#6d4aa5] dark:hover:text-black transition">
                {t("Savollar va Javoblar")}
              </ScrollLink>
            </li>
          </ul>

          <div className='hidden md:flex items-center gap-4'>
            <Switch checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
            <select className='px-3 py-2 border-b uppercase outline-none text-black' onChange={handlaChange}>
              <option value="uzb">Uzbek</option>
              <option value="rus">Russian</option>
            </select>
            <RouterLink to="/contact">
              <button className='Wrapper__button font-bold rounded-[20px] text-white px-5 py-2 bg-[#2c3393] border border-sky-500'>
                {t("Kuryer bo'lish")}
              </button>
            </RouterLink>
          </div>

      
          <div className='md:hidden flex items-center'>
            {toggleControl ? (
              <MdClose onClick={() => setToggleControl(false)} size={33} className='cursor-pointer text-[#6d4aa5] dark:text-white' />
            ) : (
              <HiMiniBars3BottomRight onClick={() => setToggleControl(true)} size={30} className='cursor-pointer text-[#6d4aa5] dark:text-white' />
            )}
          </div>
        </nav>

   
        {toggleControl && (
          <div className='md:hidden bg-white dark:bg-[#1a1a2e] p-4 space-y-4 shadow rounded'>
            <ul className="space-y-3">
              <li><ScrollLink to="Afzal" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block">{t("Afzalliklar")}</ScrollLink></li>
              <li><ScrollLink to="ishlash" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block">{t("Biz bilan ishlash")}</ScrollLink></li>
              <li><ScrollLink to="faq" smooth={true} duration={700} offset={-70} onClick={() => setToggleControl(false)} className="block">{t("Savollar va Javoblar")}</ScrollLink></li>
            </ul>
            <div className='flex items-center justify-between'>
              <span>Dark Mode</span>
              <PinkSwitch checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
            </div>
            <select className='w-full px-3 py-2 border rounded uppercase'>
              <option value="uzb">Uzbek</option>
              <option value="rus">Russian</option>
            </select>
            <RouterLink to="/contact">
              <button onClick={() => setToggleControl(false)} className='w-full font-bold text-white px-5 py-2 bg-[#2c3393] border border-sky-500 rounded-[20px]'>
                {t("Kuryer bo'lish")}
              </button>
            </RouterLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wrapper;
