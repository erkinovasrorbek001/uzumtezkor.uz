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

       
    <nav className='Header__nav flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-10 px-4'>

  {/* Chap taraf - Matn va tugma */}
  <div className='Header__left w-full lg:w-1/2 text-center lg:text-left' data-aos="zoom-in-right">

    <h1 className='Header__title text-[70px] w-[98%] font-bold leading-[1.1] mb-6 text-[#2c2c2c] dark:text-white
      max-[1208px]:text-[60px] max-[1208px]:w-[80%]
      max-[1100px]:text-[55px] max-[1100px]:w-[75%]
      max-[1024px]:text-[50px] max-[1024px]:w-[85%] max-[1000px]:mx-auto
      max-[900px]:text-[45px] max-[900px]:w-[90%]
      max-[768px]:text-[40px] max-[768px]:w-[100%]
      max-[640px]:text-[35px]
      max-[500px]:text-[30px]
      max-[400px]:text-[26px]'
    >
      <span className='text-[#2b2170]'>{t("Delgo")}</span> <br  className='mt-5'/> {t("Hamisha birga bo'lamiz!")}
    </h1>

    <button className='relative overflow-hidden px-2 py-4 text-[30px] font-bold rounded-full border-2 border-[#12121f] dark:border-white bg-white dark:bg-[#12121f] text-[#12121f] dark:text-white hover:bg-[#12121f] dark:hover:bg-white hover:text-white dark:hover:text-[#12121f] transition-all duration-1000 group'
    >
      <span className='relative z-10'>{t("Kuryer bo'lish")}</span>
      <span className='absolute inset-0 bg-[#12121f] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center z-0'></span>
    </button>

  </div>

  {/* O‘ng taraf - Rasm */}
  <div className='Header__right w-full lg:w-1/2' data-aos='zoom-in-left'>
    <img src={img} alt="Promo" className='w-full max-w-[800px] mx-auto
      max-[1200px]:max-w-[700px]
      max-[1024px]:max-w-[600px]
      max-[768px]:max-w-[500px]
      max-[500px]:max-w-[400px]
      max-[400px]:max-w-[300px]' />
  </div>

</nav>



        
        <div className='card flex mt-10 justify-left ' data-aos="zoom-in">
          <div className='Card__container 
            bg-[#fff] dark:bg-[#12121f] 
            max-w-[400px] w-full px-6 sm:px-10 py-6 sm:py-8 rounded-[30px]
            text-center shadow-md'>

            <div className='Card__title' >
              <h1 className='text-[30px] sm:text-[30px] max-[370px]:text-[25px] max-[330px]:text-[20px] font-bold dark:text-white text-[#2c2c2c]'>
                {t("Xush kelibsiz bonusi")}<br />
                <span >1 000 000 so'mgacha</span>
              </h1>
              <p className='text-left ml-5'>**</p>

              <p className='text-[20px] mt-2 font-sans dark:text-white max-[370px]:text-[20px] max-[335px]:text-[15px] text-[#4b4b4b]'>
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
