import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FirstItem from '../../assets/item-st.png';
import Seconditem from '../../assets/item-nd.png';
import ThirdItem from '../../assets/item-rd.png';
import "swiper/swiper-bundle.css";
import News from "../news";
import Portfolio from "../portfolio";

const Home = () => {
  const heroInfo = [
    { count: "5000+", desc: "Number of Completed Projects" },
    { count: "5 Years", desc: "Lifespan of Delivered Software" },
  ];

  const carouselItems = [
    FirstItem,
    Seconditem,
    ThirdItem,
    FirstItem,
    Seconditem,
  ];

  return (
    <>
    <section className="custom-container hero bg-[url('/images/your-image.jpg')] bg-cover w-[1000px] bg-center h-[80vh] mt-[60px] rounded-[30px] grid grid-cols-1 lg:grid-cols-2 p-6">
      <div className="text-white font-mono flex flex-col py-3 px-2">
        <h2 className="lg:text-[56px]  text-[28px] font-bold">San’at olamiga yo‘l oching</h2>
        <p className="lg:text-[24px] text-[18px] mt-4">
          Tasviriy san’at, dizayn va ijodiy ishlar uchun yagona platforma. Ilhom
          oling, o‘rganing va o‘z ijodingizni baham ko‘ring.
        </p>
        <button className="hidden md:block bg-white text-blue-500 px-6 py-2 rounded-full mt-4 shadow-md hover:bg-blue-500 hover:text-white transition-all w-[200px]">
          Ko‘proq bilish
        </button>
      </div>

      <div>
        <div className="flex flex-row justify-end items-end lg:flex-col gap-2 ">
          {heroInfo.map((item) => (
            <div key={item.count} className="text-white font-mono mb-4 backdrop-filter backdrop-brightness-95 backdrop-blur-md rounded-[10px] w-[260px]  py-2 px-3">
              <h2 className="text-3xl font-semibold">{item.count}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="swiper-content-holder backdrop-filter backdrop-blur-md border-white border-[1px] rounded-[20px] overflow-hidden h-[200px] flex justify-end items-center px-2 mt-[20px] lg:mt-[60px]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            className="rounded-lg shadow-lg p-[20px]"
          >

            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src={item}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>


      </div>
    </section>
    <News/>
    <Portfolio/>
    </>
  );
};

export default Home;
