import React from 'react'
import img from '../../assets/cyclist.png'
import imgone from '../../assets/cyclists.png'
import './Section.css'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
function Section() {
    const [t] = useTranslation()
  return (
    <div id='ishlash' className='Section py-10'>
        <div className='Section__container dark:bg-[#2d328e]  py-20 bg-[#fff] duration-1000'>
            <nav className='Section__nav max-w-[1200px] mx-auto '>
                <h1 className='Section__title text-[50px] font-bold text-black dark:text-white ml-20 pt-50 max-md:text-[30px]'>{t("Biz bilan juda oson!")}</h1>
                <ul className='Section__lsit grid grid-cols-1 gap-10  mt-10 ml-5 mr-5'>
                    <li data-aos='zoom-in-right' className='Section__item max-w-[1060px] w-full  py-10 px-5  dark:bg-[#2d328e] shadow-md text-black  dark:text-white  bg-[#fff]  mx-auto  justify-between items-center rounded-[40px]  flex'>
                        <div className='Section__left'>
                        <p className='Section__number text-[20px] ml-5 '>01</p>
                        <h1 className='Section_title text-[70px] max-md:text-[40px]'>{t("Anketani to'lidiring")}</h1>
                        <p className='Section__text text-[25px] max-md:text-[15px] max-md:mt-0 -mt-7'>{t("5 daqiqadan ko'p vaqt olmaydi.")}</p>
                         <button className="relative mt-10 overflow-hidden px-20 py-7 text-[30px] font-bold rounded-full border-2 border-[#2d328e] dark:border-white bg-white dark:bg-[#2d328e] text-[#2d328e] dark:text-white hover:bg-[#2d328e] dark:hover:bg-white hover:text-white dark:hover:text-[#2d328e] transition-all duration-1000 group">
  <span className="relative z-10"><Link to='/Contact'>{t("Kuryer bo'lish")}</Link></span>
  <span className="absolute inset-0 bg-[#2d328e] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center z-0"></span>
</button>
                        </div>
                        <div className='Section__right'>
                            <img className='w-[300px] max-[1055px]:hidden scale-133 -mt-11 mr-8' src={img} alt="" />
                        </div>
                    </li>
                    <li data-aos='zoom-in' className='Section__item max-w-[1060px]  py-10 px-5 dark:bg-[#2d328e] shadow-md text-black  dark:text-white  bg-[#Fff]  mx-auto  justify-between items-center rounded-[40px]  '>
                        <p className='Section__number text-[20px]'>02</p>
                        <h1 className='Section_title text-[40px] font-bold w-[60%] max-md:text-[25px]'>{t("Agar kerak bo'lsa o'zimiz qo'ng'iroq qilib tafsilotlarni aniqlashtiramiz")}</h1>
                    </li>
                    <li data-aos='zoom-in-right' className='Section__item max-w-[1060px]  py-10 px-5 w-full dark:bg-[#2d328e] shadow-md text-black  dark:text-white  bg-[#fff]  mx-auto  justify-between items-center rounded-[40px] '>
                        <p className='Section__number  text-[20px]'>03</p>
                        <h1 className='Section_title text-[40px] font-black max-md:text-[25px]'>{t("Qisqa ta'limdan o'ting")}</h1>
                    </li>
                    <li data-aos='zoom-in' className='Section__item max-w-[1060px]   py-7 px-3  gap-50  dark:text-[#2d238e] bg-[#fff] dark:bg-[#2d328e] shadow-md mx-auto  justify-between items-center rounded-[40px]  flex'>
                        <div className='Section__left dark:text-[#fff] text-[#2d328e] duration-1000'>
                        <p className='Section__number text-[20px] ml-5 '>04</p>
                        <h1 className='Section_title text-[60px] font-bold max-md:text-[30px] w-[80%]'>{t("Yetkazib berishni boshlang!")}</h1>
                          <button className="relative mt-10 overflow-hidden px-20 py-7 text-[30px] font-bold rounded-full border-2 border-[#2d328e] dark:border-white bg-white dark:bg-[#2d328e] text-[#2d328e] dark:text-white hover:bg-[#2d328e] dark:hover:bg-white hover:text-white dark:hover:text-[#2d328e] transition-all duration-1000 group">
  <span className="relative z-10"><Link to='/Contact'>{t("Ishlashni boshlash")}</Link></span>
  <span className="absolute inset-0 bg-[#2d328e] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center z-0"></span>
</button>
                        </div>
                        <div className='Section__right'>
                            <img className='w-[400px] max-[1055px]:hidden scale-x-190 scale-y-287 -mt-14 -ml-29' src={imgone} alt="" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Section