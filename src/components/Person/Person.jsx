import React from 'react'
import { useTranslation } from 'react-i18next';

function Person() {
  const [t] = useTranslation()
  return (
    <div data-aos='zoom-in' className="pt-30 Person bg-white  dark:bg-[#12121f] py-10 px-4 min-h-screen flex items-center justify-center">
      <div className="Person__container w-full max-w-[500px] bg-white dark:bg-[#12121f] shadow-md rounded-xl p-6">
       
        <div className="Person__logo flex justify-center mb-4">
          <img
            src="https://img.paperform.co/fetch/w_400,f_auto/https://s3.amazonaws.com/pf-form-assets-01/t-260357/assets/2024-06-25/5x13xrr/USP_FastDelivery.svg"
            alt="delivery logo"
            className="w-32 sm:w-40"
          />
        </div>

        
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
          {t("Uzum Tezkor jamoasiga xush kelibsiz!")}
        </h1>
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-6">
          {t("Добро пожаловать в команду Uzum Tezkor!")}
        </p>

       
        <form className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Sizning telefon raqamingiz")}<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+998xxxxxxxxx"
              className="w-full px-4 py-2 bg-white   border-[#12121f] text-[#12121f] dark:border-gray-600 rounded-md focus:outline-none focus:ring-2  dark:bg-[#12121f] dark:text-white"
              required
            />
            <p className="text-[12px] text-blue-600 mt-1">
              {t("Iltimos, faollashtirilgan telefon raqamingizni to‘g‘ri kiriting")}
            </p>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Ismingiz va familiyangiz")}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-[#12121f] dark:border-gray-600 rounded-md focus:outline-none focus:ring-2  dark:bg-[#12121f] dark:text-white"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Tug‘ilgan kuningiz")}<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 bg-[#fff] text-[#12121f] dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12121f] dark:bg-[#12121f] dark:text-white"
              required
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Buyurtmalarni qaysi transportda yetkazib berishga tayyorsiz?")}<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-2 border text-black border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#12121f] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#12121f]"
              required
            >
              <option value="">Select...</option>
              <option value="piyoda">{t("Piyoda")}</option>
              <option value="velosiped">{t("Velosiped")}</option>
              <option value="mashina">{t("Mashina")}</option>
            </select>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Qaysi shaharda ishlamoqchi bo‘lganingizni tanlang")}<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 text-black dark:border-gray-600 rounded-md bg-white dark:bg-[#12121f] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#000]"
              required
            >
              <option value="">Select...</option>
              <option value="toshkent">Toshkent</option>
              <option value="samarqand">Samarqand</option>
              <option value="buxoro">Buxoro</option>
              <option value="fargona">Farg‘ona</option>
              <option value="andijon">Andijon</option>
              <option value="navoiy">Navoiy</option>
              <option value="namangan">Namangan</option>
            </select>
          </div>

        
         <button type='Submit' className="relative overflow-hidden px-6 py-3 font-bold rounded-full border-2 border-[#12121f] dark:border-white bg-white dark:bg-[#12121f] text-[#12121f] dark:text-white hover:bg-[#12121f] dark:hover:bg-white hover:text-white dark:hover:text-[#12121f] transition-all duration-500 group">
                <span className="relative z-10">{t("Yuborish")}</span>
                <span className="absolute inset-0 bg-[#12121f] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></span>
              </button>
        </form>
      </div>
    </div>
  )
}

export default Person;
