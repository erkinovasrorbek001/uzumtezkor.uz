import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

function Hero() {
  const [t] = useTranslation();

  return (
    <div id="Afzal" className="Hero bg-white dark:bg-[#12121f] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-[40px] md:text-[70px] font-bold text-center text-black dark:text-white">
          {t("Afzalliklar")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {/* Card 1 */}
          <div
            data-aos="zoom-in-right"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium mb-2">
              {t("Doimiy ish faoliyati.")}
            </h2>
            <p className="text-[18px] md:text-[22px]">
              {t("Har kuni ishlashingiz mumkin.")}
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in-right"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium mb-2">
              {t("Barqaror va yuqori daromad.")}
            </h2>
            <p className="text-[18px] md:text-[22px]">
              {t("Buyurtmalarni o'z vaqtida va sifatli yetkazib bering va oyiga 2 bora, yuqori daromad oling.")}
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in-right"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium mb-2">
              {t("Ish tajribasi kerak emas.")}
            </h2>
            <p className="text-[18px] md:text-[22px]">
              {t("Tezkor ta'lim va buyurtmalar payti qo'llab-quvvatlash.")}
            </p>
          </div>

          {/* Card 4 */}
          <div
            data-aos="zoom-in"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium mb-2">
              {t("Ozod ish jadvali.")}
            </h2>
            <p className="text-[18px] md:text-[22px]">
              {t("Siz ish kunlari va vaqtini o'zingiz tanlaysiz - 4 soatdan 12 soatgacha.")}
            </p>
          </div>

          {/* Card 5 */}
          <div
            data-aos="zoom-in"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium">
              {t("O'qish yoki asosiy ish bilan birlashtirish oson")}
            </h2>
          </div>

          {/* Card 6 */}
          <div
            data-aos="zoom-in"
            className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white p-6 rounded-[30px] shadow-md"
          >
            <h2 className="text-[24px] md:text-[30px] font-medium mb-2">
              {t("Har qanday transport")}
            </h2>
            <p className="text-[18px] md:text-[22px]">
              {t("Buyurtmalarni velosipedda, mashinada, skuterda yoki samokatda yetkazishingiz mumkin.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
