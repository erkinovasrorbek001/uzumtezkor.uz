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
                        <li className='Hero__item px-2 w-[500px] py-10 text-left border-1  mx-auto rounded-[30px] bg-[#fff] dark:bg-[#12121f] shadow-md text-black dark:text-white relative' data-aos='zoom-in-right'>
                            <h1 className='Hero_title text-[40px] items-end text-wrap font-medium ml-6'>
                               {t("Doimiy ish faoliyati.")}
                            </h1>
                            <p className='Hero__text text-[20px] ml-6'>{t("Har kuni ishlashingiz mumkin.")}</p>
                        </li>
                        <li data-aos='zoom-in-right' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-6 w-[500px] mx-auto rounded-[30px] bg-[#fff] '>
                            <h1 className='Hero_title text-[40px] text-wrap ml-7 font-medium '>{t("Barqaror va yuqori daromad.")}</h1>
                            <p className='Hero__text text-[20px] w-[100%] ml-7'>{t("Buyurtmalarni o'z vaqtida va sifatli yetkazib bering va oyiga 2 bora, yuqori daromad oling.")}</p>
                        </li>
                        <li data-aos='zoom-in-right' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-3 py-7 w-[500px] mx-auto rounded-[30px] bg-[#fff]  '>
                            <h1 className='Hero_title text-[40px] text-wrap ml-2 font-medium'>{t("Ish tajribasi kerak emas.")}</h1>
                            <p className='Hero__text text-[20px] w-[90%] ml-2'>{t("Tezkor ta'lim va buyurtmalar payti qo'llab-quvvatlash.")}</p>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-6 w-[500px] mx-auto rounded-[30px] bg-[#fff]  '>
                            <h1 className='Hero_title text-[40px] text-wrap ml-7 font-medium'>{t("Ozod ish jadvali.")}</h1>
                            <p className='Hero__text text-[20px] w-[90%] ml-7'>{t("Siz ish kunlari va vaqtini o'zingiz tanlaysiz - 4 soatdan 12 soatgacha.")}</p>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md text-black dark:text-white px-5 py-10 w-[500px] mx-auto rounded-[30px] bg-[#fff] '>
                            <h1 className='Hero_title text-[35px] text-wrap font-medium'>{t("O'qish yoki asosiy ish bilan birlashtirish oson")}</h1>
                        </li>
                        <li data-aos='zoom-in' className='Hero__item border-1 dark:bg-[#12121f] shadow-md  text-black dark:text-white px-5 py-6 w-[500px] mx-auto rounded-[30px] bg-[#fff] relative'>
                            <h1 className='Hero_title text-[45px] ml-5 text-wrap font-medium'>
                                {t("Har qanday transport")}
                            </h1>
                            <p className='Hero__text text-[25px] ml-5'>{t("Buyurtmalarni velosipedda, mashinada, skuterda yoki samokatda yetkazishingiz mumkin.")}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Hero