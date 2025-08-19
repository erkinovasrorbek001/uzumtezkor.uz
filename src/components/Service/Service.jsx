import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

function Service() {
  const [t] = useTranslation()
  const faqData = [
    {
      question: t("Kuryerlarga qanday talablar qo'yiladi?"),
      answer: t("Uzum Tezkorning hamkorida kuryer sifatida ishlashi uchun 18 yoshdan katta bo'lish, Android 6.0 versiyasi asosidagi smartfonga ega bo'lish, o'zbek tilini bilish va og'zaki rus tilini bilish kifoya."),
    },
    {
      question: t("Kuryer bo'lib ishlash uchun qanday hujjatlar kerak?"),
      answer:
        t("Pasportning asl nusxasi, bank kartangiz ma'lumotlari kerak bo'ladi, agar siz mashinada ishlasangiz shuningdek haydovchilik guvohnomasi va avtomobilingiz texpasporti kerak."),
    },
    {
      question: t("Kuryerning mukofoti nimaga bog'liq?"),
      answer:
        t("Ish haqi navbatchilik davomiyligiga, bajarilgan buyurtmalar soniga shuningdek intizom va xizmat ko'rsatish standartlari muvofiqligiga bog'liq."),
    },
    {
      question: t("Qaysi shaxarlarda ishlashim mumkin?"),
      answer:
        t("Hozirgi vaqtda bizning xizmatimiz Toshkent shahri, Samarqand, Andijon, Farg’ona, Navoiy, Namangan va Buxoro viloyatlarida ishga tushirilgan. Biroq yetkazib berish maydoni keskin ravishda ko’payib bormoqda. Tez orada O’zbekistonning boshqa shaharlarida ham xizmatimizni ishga tushiramiz."),
    },
    {
      question: t("Qancha vaqt ishlash kerak?"),
      answer:
        t("Siz o'zingizga qulay vaqtga qarab navbatchiligingiz uzunligini tanlay olasiz. Ular 4 soatdan 12 soatgacha bo'lishi mumkin."),
    },
    {
      question: t("Men buyurtmalarni velosipedda/piyoda yetkaza olamanmi?"),
      answer: t("Sizlar yetkazib berish uskunalarini va formasini berasizlarmi?"),
    },
    {
      question: t("Men asosiy ishimdan yoki o'qishimdandan tashqari kuryer bo'lib ishlay olamanmi?"),
      answer: t("Ha, siz har bir mavsum uchun qulay forma va uskunalar olasiz."),
    },
  ];

  return (
    <div id='faq' className="Service  bg-white dark:bg-[#2d328e] duration-500 py-10 px-4">
      <div className="Service__container max-w-[1200px] mx-auto">
        <nav className="Service__nav flex flex-col items-center">
          <h1 data-aos='zoom-in-right' className="Service__title text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-black mb-8">
           {t("FAQ")}
          </h1>
          <ul className="Service__list w-full flex flex-col items-center gap-6">
            {faqData.map((item, index) => (
              <li data-aos='zoom-in'
                key={index}
                className="Service__item w-full rounded-2xl sm:w-[90%] md:w-[80%] lg:w-[70%]"
              >
                <Accordion className="dark:bg-white bg-[#1a1a2e] dark:text-[#2d328e] text-white  shadow-md">
                  <AccordionSummary
                    expandIcon={<RiArrowDownSLine className="text-xl" />}
                    aria-controls={`panel-${index}-content`}
                    id={`panel-${index}-header`}
                  >
                    <Typography component="span">
                      <p className="font-bold text-base sm:text-lg md:text-xl">
                        {item.question}
                      </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-sm sm:text-base">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Service;
