import { useState } from "react";
import CardImg from "../../assets/about-img.png";
import MainLogo from '../../assets/main-logo.svg'
const cardData = [
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
  { image: CardImg },
];

const About = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="custom-container">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] p-[20px]">
        <div className="w-full"><img src={MainLogo} alt="logo" className="w-full" /></div>
        <div className="text-black font-mono text-center lg:text-start">
          <h2 className="text-[26px] lg:text-[32px]">Biz Haqimizda</h2>
          <p className="text-[18px] lg:text-[20px] lg:w-[600px]">Biz, tasviriy san’atni rivojlantirish va ijodkorlarni qo‘llab-quvvatlashga bag‘ishlangan jamoa sifatida, har bir tasvirda hikoya yaratishga ishonamiz. Bizning ishimiz – har bir yaratgan asar orqali san’atni yangi ufqlarga olib chiqish. Maqsadimiz – san’at orqali o‘zaro aloqani kuchaytirish, ilhom berish va ijodiy jarayonlarni qo‘llab-quvvatlash.</p>
       </div>
      </div>
      <div className="custom-container grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 justify-between items-center">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 rounded-2xl overflow-hidden ${hoverIndex === index ? "scale-105" : "scale-100"
              }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={item.image}
              alt="Team Lady"
              className="w-full object-cover rounded-2xl"
            />
            <div
              className={`absolute left-0 bottom-0 w-full bg-black/50 backdrop-blur-md text-white p-4 rounded-t-[24px] transition-transform duration-300 ${hoverIndex === index ? "translate-y-0" : "translate-y-full"
                }`}
            >
              <h2 className="text-lg font-semibold">Ravshan Begimov</h2>
              <p className="text-sm">Respublika axborot boshligi bo‘limi</p>
              <div className="flex gap-3 mt-2 text-white">
                <i className="fa-solid fa-phone-volume"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default About;
