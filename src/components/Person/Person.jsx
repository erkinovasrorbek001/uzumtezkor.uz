import React from 'react'
import { useTranslation } from 'react-i18next';

function Person() {
  const [t] = useTranslation()
  return (
    <div data-aos='zoom-in' className="pt-30 Person bg-white dark:bg-[#1a1a2e] py-10 px-4 min-h-screen flex items-center justify-center">
      <div className="Person__container w-full max-w-[500px] bg-white dark:bg-gray-900 shadow-md rounded-xl p-6">
       
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7000FF] dark:bg-gray-800 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7000FF] dark:bg-gray-800 dark:text-white"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Tug‘ilgan kuningiz")}<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7000FF] dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              {t("Buyurtmalarni qaysi transportda yetkazib berishga tayyorsiz?")}<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7000FF]"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7000FF]"
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

        
          <button
            type="submit"
            className=" Footer__button mt-4 w-full bg-[#7000FF] text-white py-2 rounded-full font-semibold hover:bg-[#5a00cc] transition-all"
          >
            {t("Yuborish")}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Person;
