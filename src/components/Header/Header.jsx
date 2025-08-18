import React from 'react'
import img from '../../assets/promo.png'
import './Header.css'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  const [t]= useTranslation();
  
  return (
    <div className='Header bg-white dark:bg-[#1a1a2e] py-20 duration-1000'>
      <div className='Header__container max-w-[1200px] mx-auto px-4'>

       
        <nav className='Header__nav flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-10'>

          
          <div className='Header__left w-full lg:w-1/2 text-center lg:text-left' data-aos="zoom-in-right">
            <h1 className='Header__title text-[40px] sm:text-[50px] lg:text-[70px] text-[#413636] dark:text-white font-bold leading-tight'>
              <span className='text-sky-500'>{t("Uzum Tezkor")}</span><br /> {t("bilan bugunoq kuryer bo'ling")}
            </h1>

            <button className='Header__button 
              mt-6 px-6 py-4 sm:py-5 sm:px-10  text-[18px] sm:text-[22px] lg:text-[25px] 
              font-bold rounded-[30px]  
               transition duration-300 relative '>
              {t("Ro'yxatdan o'tish")}
            </button>
          </div>

       
          <div className='Header__right w-full lg:w-1/2'  data-aos='zoom-in-left' >
            <img src={img} alt="Promo" className='w-full max-w-[800px] mx-auto' />
          </div>
        </nav>

        
        <div className='card flex mt-10 justify-left ' data-aos="zoom-in">
          <div className='Card__container 
            bg-yellow-200 dark:bg-amber-300 
            max-w-[400px] w-full px-6 sm:px-10 py-6 sm:py-8 rounded-[30px]
            text-center shadow-md'>

            <div className='Card__title' >
              <h1 className='text-[30px] sm:text-[30px] font-bold text-[#2c2c2c]'>
                {t("Xush kelibsiz bonusi")}<br />
                <span >1 000 000 so'mgacha</span>
              </h1>
              <p className='text-left ml-5'>**</p>

              <p className='text-[20px] mt-2 font-sans text-[#4b4b4b]'>
                {t("Kuryer bo'ling va bonus oling!")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
