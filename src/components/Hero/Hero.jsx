import React from 'react'
import './Hero.css'
import { useTranslation } from 'react-i18next'
function Hero() {
    const [t] = useTranslation();
    return (
        <div id='Afzal' className='Hero '>
            <div className='Hero__container bg-white dark:bg-[#12121f] py-20'>
                <nav className='Hero__nav max-w-[1200px] mx-auto py-2'>
                    <h1 className='Hero__title text-[70px] font-bold dark:text-white text-black max-sm:text-[40px] text-center'>{t("Afzalliklar")}</h1>
                    <ul className='Hero__lsit mt-10 flex flex-wrap px-2 justify-between gap-10 items-center '>
                        <li className='Hero__item px-2 w-[500px] py-10 max-[400px]:py-10  text-left border-1  mx-auto rounded-[30px] bg-[#fff] dark:bg-[#12121f] shadow-md text-black dark:text-white relative' data-aos='zoom-in-right'>
                            <h1 className='Hero_title text-[40px]  items-end text-wrap max-[400px]:text-[30px] font-medium ml-6'>
                               {t("Doimiy ish faoliyati.")}
                            </h1>
                            <p className='Hero__text text-[24px] ml-6 mt-3 max-[400px]:text-[20px]'>{t("Har kuni ishlashingiz mumkin.")}</p>
                        </li>
                        <li data-aos='zoom-in-right' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-6 w-[500px] mx-auto rounded-[30px] bg-[#fff] '>
                            <h1 className='Hero_title text-[40px] max-[400px]:text-[30px]  ml-2 text-wrap font-medium '>{t("Barqaror va yuqori daromad.")}</h1>
                            <p className='Hero__text text-[24px] mt-2 ml-2 w-[90%] max-[400px]:text-[20px]'>{t("Buyurtmalarni o'z vaqtida va sifatli yetkazib bering va oyiga 2 bora, yuqori daromad oling.")}</p>
                        </li>
                        <li data-aos='zoom-in-right' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-3 py-10 w-[500px] mx-auto rounded-[30px] bg-[#fff]  '>
                            <h1 className='Hero_title max-[400px]:text-[27px] text-[40px] text-wrap ml-2 font-medium'>{t("Ish tajribasi kerak emas.")}</h1>
                            <p className='Hero__text text-[24px] max-[400px]:text-[20px] mt-2 w-[90%] ml-2'>{t("Tezkor ta'lim va buyurtmalar payti qo'llab-quvvatlash.")}</p>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-6 w-[500px] mx-auto rounded-[30px] bg-[#fff]  '>
                            <h1 className='Hero_title text-[40px] max-[400px]:text-[30px] text-wrap ml-2 font-medium'>{t("Ozod ish jadvali.")}</h1>
                            <p className='Hero__text text-[24px] mt-2 w-[90%] ml-2 max-[400px]:text-[18px]'>{t("Siz ish kunlari va vaqtini o'zingiz tanlaysiz - 4 soatdan 12 soatgacha.")}</p>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-10 w-[500px] mx-auto rounded-[30px] bg-[#fff] '>
                            <h1 className='Hero_title text-[40px] max-[400px]:text-[25px] text-wrap font-medium'>{t("O'qish yoki asosiy ish bilan birlashtirish oson")}</h1>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md  text-black dark:text-white px-5 py-10 w-[500px] mx-auto rounded-[30px] bg-[#fff] relative'>
                            <h1 className='Hero_title text-[40px] max-[400px]:text-[28px] ml-2 text-wrap font-medium'>
                                {t("Har qanday transport")}
                            </h1>
                            <p className='Hero__text text-[24px] max-[400px]:text-[20px] ml-2 w-[84%]'>{t("Buyurtmalarni velosipedda, mashinada, skuterda yoki samokatda yetkazishingiz mumkin.")}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Hero