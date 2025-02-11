import UzbMap from '../../assets/map-uzb.png'
import Nature from '../../assets/nature.png'
import Coffee from '../../assets/coffee.png'
import Oil from '../../assets/oil.png'
import Cement from '../../assets/cement.png'
import Yogurt from '../../assets/yogurt.png'
import Sprey from '../../assets/sprey.png'
import TeamLady from '../../assets/team-lady.png'
import Drop from '../../assets/drop.svg'
import AsianAgent from '../../assets/asian-agent.png'


import { useState } from 'react'

const Portfolio = () => {
  const [activeKey, setActiveKey] = useState("1");
  const cardImgs = [
    Sprey,
    Yogurt,
    Nature,
    Cement,
    Oil,
    Coffee,
  ];

  const faqs = [
    {
      key: "1",
      question: "Tasviriyoujna.uz qanday xizmatlarni taqdim etadi?",
      answer:
        "Biz grafik dizayn, san’at asarlari yaratish, raqamli san’at, animatsiya va brendni rivojlantirish boʻyicha xizmatlar taqdim etamiz."
    },
    {
      key: "2",
      question: "Xizmatlarni qanday buyurtma qilish mumkin?",
      answer: "Siz biz bilan bog‘lanib, buyurtma berishingiz mumkin."
    },
    {
      key: "3",
      question: "Xizmatlar uchun narxlar qanday hisoblanadi?",
      answer: "Narxlar loyihaning murakkabligi va hajmiga bog‘liq."
    },
    {
      key: "4",
      question: "San’at asarlarini yaratishda qanday uslubda ishlaysiz?",
      answer: "Biz turli xil dizayn uslublaridan foydalanamiz."
    },
    {
      key: "5",
      question: "Ishlar qancha vaqt davomida tayyorlanadi?",
      answer: "Loyihaning murakkabligiga qarab muddat belgilanadi."
    }
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      {/* ================Map part============= */}
      <section className='custom-container grid grid-cols-1 lg:grid-cols-2 mt-2 lg:mt-3'>
        <div>
          <img src={UzbMap} alt="The map of Uzbekistan" />
        </div>
        <div className='flex flex-col px-4 py-3 text-black font-mono'>
          <h2 className='text-[28px] lg:text-[34px]'>Toshkent</h2>
          <p>
            Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz.
            Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.
          </p>
        </div>
      </section>

      {/* ====================Cards part============== */}
      <section className='custom-container'>
        <h2 className='lg:pl-[220px] text-center lg:text-start text-[22px] lg:text-[38px]'>Portfoliyamiz</h2>
        <div className='flex flex-wrap gap-4 lg:justify-end lg:items-end items-center justify-center'>
          {cardImgs.map((img, index) => (
            <div key={index} className='flex justify-end items-end'>
              <img src={img} alt={`Portfolio image ${index + 1}`} className='w-full object-cover rounded-md' />
            </div>
          ))}
        </div>
      </section>

      {/* ================ Comments part================ */}
      <section className='custom-container'>
        <h2 className=' text-center lg:text-start text-[22px] lg:text-[32px] py-4'>Biz Haqimizda Sharhlar </h2>
        <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-[26px] justify-between'>
          <div
            className={`relative transition-all duration-300  rounded-2xl overflow-hidden ${hoverIndex === 0 ? "scale-105" : "scale-100"}`}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={TeamLady}
              alt="Team Lady"
              className="w-full object-cover rounded-2xl "
            />
            <div
              className={`absolute left-0 bottom-0 w-full bg-black/50 backdrop-blur-md text-white p-4 rounded-t-[24px] transition-transform duration-300 ${hoverIndex === 0 ? "translate-y-0" : "translate-y-full"}`}
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
          <div className='flex flex-col border-[2px] border-blue-600 py-[10px] px-[20px] rounded-3xl'>
            <div className='flex items-start justify-start '>
              <img src={Drop} alt="drop" />
            </div>
            <h3 className='text-blue-600 text-[18px] lg:text-[22px] text-center  py-2'>Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz. Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.</h3>
            <div className='flex items-end justify-end  '>
              <img src={Drop} alt="drop" />
            </div>
          </div>
        </div>

        <div className="w-full  font-sans p-4">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.key}
                  className="bg-gray-100 rounded-lg p-4 cursor-pointer transition duration-300"
                  onClick={() => setActiveKey(activeKey === faq.key ? "" : faq.key)}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span className="bg-blue-500 text-white rounded-full px-3 py-1 mr-3">{faq.key}</span>
                    {faq.question}
                  </div>
                  {activeKey === faq.key && <p className="mt-3 text-gray-700">{faq.answer}</p>}
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 bg-blue-500 text-white p-6 rounded-xl flex items-center justify-center min-h-[120px]">
              <p>{faqs.find(faq => activeKey === faq.key)?.answer}</p>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center gap-8 p-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Biz bilan bog‘laning</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ism"
                className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="+998"
                className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <textarea
                placeholder="Message text goes here"
                className="w-full p-3 h-32 rounded-lg bg-gray-100 focus:outline-none"
              ></textarea>
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg text-center">
                Biz bilan bog‘laning
              </button>
            </form>
          </div>


          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={AsianAgent}
              alt="Support"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
