import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div className="Footer bg-white dark:bg-[#1a1a2e] duration-1000 text-black dark:text-white py-10 px-4">
      <div className="Footer__container max-w-[1200px] mx-auto">
        <nav className="Footer__nav flex flex-col items-center text-center">
          {/* Logo */}
          <div className="Footer__logo mb-6">
            <img data-aos='zoom-in'
              className="mx-auto w-[150px] sm:w-[180px] md:w-[200px]"
              src="https://courier.uzumtezkor.uz/img/logo.svg"
              alt="Uzum Tezkor logo"
            />
          </div>

   
          <address  className="text-center  dark:text-white text-[16px] sm:text-[18px] md:text-[20px] text-gray-800">
            <h1  className="Footer__text mb-2">
              Tel:{" "}
              <a className="text-[#7000FF]" href="tel:+998977030513">
                +998977030513
              </a>{" "}
               Email:{" "}
              <a className="text-[#7000FF]" href="mailto:windowsa786@gmail.com">
                windowsa786@gmail.com
              </a>
            </h1>
            <p className="Footer_text mb-3 px-2" >
              Manzil: O'zbekiston, Toshkent sh. Yunusobod tumani, Kichik halqa yo'li, 54
              <br />
              IP MCHJ «UZUM Tezkor»
            </p>
            <p className="Footer__write">
              <Link className="text-[#7000FF] " to="/Shartnoma">
                Foydalanuv shartnomasi
              </Link>
            </p>
          </address>

      
          <div className="write w-full md:w-[90%] lg:w-[80%] mt-8">
            <p  className="rite text-sm sm:text-base text-gray-500 dark:text-white text-left leading-relaxed">
              <strong>Aksiya "Salomlashuv bonusi"</strong> 17-dekabrdan 27-dekabrgacha Uzum Tezkor
              xizmatining hamkori bilan ishlayotgan kuryerlar uchun (keyingi o‘rinlarda — Xizmat),
              avval Xizmat buyurtmalarini bajarmagan kuryerlar uchun o‘tkaziladi.
              <br />
              Aksiya shartlariga ko‘ra har bir kuryer faqat bitta bonus olishi mumkin: 300 000 (uch
              yuz ming) yoki 1 000 000 (bir million) so‘m. Bonuslar qo‘shib hisoblanmaydi.
              <br />
              <br />
              300 000 so‘mlik bonusni olish uchun quyidagi shartlarni bajarish kerak: Xizmat
              buyurtmalaridan 80 tasini avtomobil foydalanib, Xizmatga ulanishdan boshlab 10 ta
              kalendar kun ichida yetkazib berish.
              <br />
              1 000 000 so‘mlik bonusni olish uchun quyidagi shartlarni bajarish kerak: Xizmat
              buyurtmalaridan 300 tasini avtomobil foydalanib, Xizmatga ulanishdan boshlab 30 ta
              kalendar kun ichida yetkazib berish.
              <br />
              <br />
              Aksiya faqat Toshkent shahrida amal qiladi. Bonus barcha shartlar bajarilganidan
              keyin 5 ish kuni ichida to‘lanadi.
            </p>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer
