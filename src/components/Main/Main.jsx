import React from 'react'
import { useTranslation } from 'react-i18next'

function Main() {
  const [t] = useTranslation()
  return (
    <div data-aos='zoom-in' className="Main bg-white dark:bg-[#1a1a2e] duration-500">
      <div className="Main__container">
        <nav className="Main__nav">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-3 sm:gap-4 md:gap-6 py-6 px-4 justify-left">
            {[
              t("Kuryerlik O’zbekiston Uzum Tezkor"),
              t("Kurerlik O’zbekiston Uzum Tezkor"),
              t("Kuryerlik Toshkent Uzum Tezkor"),
              t("Kurerlik Toshkent Uzum Tezkor"),
              t("kuryer toshken Uzum Tezkor"),
              t("kurer toshken Uzum Tezkor"),
              t("Kuryerlik Samarqand Uzum Tezkor"),
              t("Kurerlik Samarqand Uzum Tezkor"),
              t("Kuryerlik Farg’ona Uzum Tezkor"),
              t("Kurerlik Fargona Uzum Tezkor"),
              t("Buxoro kuryerlik Uzum Tezkor"),
              t("Buxoro kurerli Uzum Tezkor"),
              t("Andijon kuryer Uzum Tezkor"),
              t("Andijon kurer Uzum Tezkor"),
              t("Navoi kuryer Uzum Tezkor"),
              t("Navoi kurer Uzum Tezkor"),
              t("Navoida kurerlik Uzum Tezkor"),
              t("Navoida kuryerlik Uzum Tezkor"),
              t("Navoida kurerlik Uzum Tezkor"),
              t("Namanganda kuryerlik Uzum Tezkor"),
              t("Namanganda kurerlik Uzum Tezkor"),
            ].map((text, index) => (
              <p
                key={index}
                className="bg-[#7000FF] dark:bg-white dark:text-[#7000FF]  text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-md transition-all duration-300 hover:scale-105"
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
