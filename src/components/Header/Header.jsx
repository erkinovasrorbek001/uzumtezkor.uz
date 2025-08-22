import React from 'react'
import img from '../../assets/promo.png'
import './Header.css'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  const [t]= useTranslation();
  
  return (
    <div className='Header bg-white dark:bg-[#12121f] py-20 duration-1000'>
      <div className='Header__container max-w-[1200px] mx-auto px-4'>

       
        <nav className='Header__nav flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-10'>

          
          <div className='Header__left w-full lg:w-1/2 text-center lg:text-left' data-aos="zoom-in-right">
            <h1 className='Header__title text-[40px] sm:text-[50px] lg:text-[70px] text-[#413636] dark:text-white font-bold leading-tight'>
              <span className='text-[#2b2170]'>{t("Delgo")}</span><br /> {t("Hamisha birga bo'lamiz!")}
            </h1>

           <button className="relative overflow-hidden px-20 py-7 text-[30px] font-bold rounded-full border-2 border-[#12121f] dark:border-white bg-white dark:bg-[#12121f] text-[#12121f] dark:text-white hover:bg-[#12121f] dark:hover:bg-white hover:text-white dark:hover:text-[#12121f] transition-all duration-1000 group">
  <span className="relative z-10">{t("Kuryer bo'lish")}</span>
  <span className="absolute inset-0 bg-[#12121f] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center z-0"></span>
</button>
          </div>

       
          <div className='Header__right w-full lg:w-1/2'  data-aos='zoom-in-left' >
            <img src={img} alt="Promo" className='w-full max-w-[800px] mx-auto' />
          </div>
        </nav>

        
        <div className='card flex mt-10 justify-left ' data-aos="zoom-in">
          <div className='Card__container 
            bg-[#fff] dark:bg-[#12121f] 
            max-w-[400px] w-full px-6 sm:px-10 py-6 sm:py-8 rounded-[30px]
            text-center shadow-md'>

            <div className='Card__title' >
              <h1 className='text-[30px] sm:text-[30px] font-bold dark:text-white text-[#2c2c2c]'>
                {t("Xush kelibsiz bonusi")}<br />
                <span >1 000 000 so'mgacha</span>
              </h1>
              <p className='text-left ml-5'>**</p>

              <p className='text-[20px] mt-2 font-sans dark:text-white text-[#4b4b4b]'>
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
