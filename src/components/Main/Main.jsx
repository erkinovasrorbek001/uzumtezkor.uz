import React from 'react'
import { useTranslation } from 'react-i18next'

function Main() {
  const [t] = useTranslation()
  return (
    <div  className="Main bg-white dark:bg-[#2d328e] duration-500">
      <div className="Main__container">
        <nav className="Main__nav">
          <div  className="max-w-[1200px] mx-auto flex flex-wrap gap-3 sm:gap-4 md:gap-6 py-6 px-4 justify-left">
            {[
              t("Kuryerlik O’zbekiston Delgo.uz"),
              t("Kurerlik O’zbekiston Delgo.uz"),
              t("Kuryerlik Toshkent Delgo.uz"),
              t("Kurerlik Toshkent Delgo.uz"),
              t("kuryer toshken Delgo.uz"),
              t("kurer toshken Delgo.uz"),
              t("Kuryerlik Samarqand Delgo.uz"),
              t("Kurerlik Samarqand Delgo.uz"),
              t("Kuryerlik Farg’ona Delgo.uz"),
              t("Kurerlik Fargona Delgo.uz"),
              t("Buxoro kuryerlik Delgo.uz"),
              t("Buxoro kurerli Delgo.uz"),
              t("Andijon kuryer Delgo.uz"),
              t("Andijon kurer Delgo.uz"),
              t("Navoi kuryer Delgo.uz"),
              t("Navoi kurer Delgo.uz"),
              t("Navoida kurerlik Delgo.uz"),
              t("Navoida kuryerlik Delgo.uz"),
              t("Navoida kurerlik Delgo.uz"),
              t("Namanganda kuryerlik Delgo.uz"),
              t("Namanganda kurerlik Delgo.uz"),
            ].map((text, index) => (
              <p data-aos='zoom-in'
                key={index}
                className="bg-[#2d328e] dark:bg-white dark:text-[#2d328e]  text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-md  duration-1000 hover:scale-105"
              >
                {text}
              </p>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Main
