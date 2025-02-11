import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import NewsImg from '../../assets/news-img.png'
import TeamLady from '../../assets/team-lady.png'

const News = () => {

  const slides = [
    {
      img: NewsImg,
      title: "San’at olamiga yo‘l oching",
      date: "10.08.2025",
    },

    {
      img: NewsImg,
      title: "San’at olamiga yo‘l oching",
      date: "10.08.2025",
    },

    {
      img: NewsImg,
      title: "San’at olamiga yo‘l oching",
      date: "10.08.2025",
    },

    {
      img: NewsImg,
      title: "San’at olamiga yo‘l oching",
      date: "10.08.2025",
    },

  ];


  const profiles = [
    {
      img: TeamLady, // Replace with actual image path
      name: "Ravshan Begimov",
      role: "Respublika axborot boshligi bo‘limi",
    },
    {
      img: TeamLady,
      name: "Person 2",
      role: "Some Role",
    },
    {
      img: TeamLady,
      name: "Person 3",
      role: "Another Role",
    },
    {
      img: TeamLady,
      name: "Person 3",
      role: "Another Role",
    },
    {
      img: TeamLady,
      name: "Person 3",
      role: "Another Role",
    },
    {
      img: TeamLady,
      name: "Person 3",
      role: "Another Role",
    },
  ];
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <section className="custom-container">

      {/* =================News part============== */}
      <div className="flex py-2  justify-between items-center mt-3">
        <h2 className="text-[24px] lg:text-[40px] font-mono">Kun Yangligi</h2>

        <button className=" relative overflow-hidden bg-blue-500 text-white text-sm font-semibold px-6 py-2  rounded-full shadow-md transition-all duration-300 ease-in-out hover:text-blue-500 hover:bg-transparent border border-blue-500 hover:scale-105">
          <span className="relative z-10">Filter</span>
          <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </button>

      </div>
      <div className="w-full  mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.img}
                  alt="Slide"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5 rounded-xl">
                  <h2 className="text-white text-lg font-bold">{slide.title}</h2>
                </div>
                <div className="absolute top-2 right-2 bg-gray-100/80 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {slide.date}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ===================Team part==================== */}

      <div className="w-full mt-4 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative transition-all duration-300 rounded-2xl overflow-hidden ${hoverIndex === index ? "scale-105" : "scale-100"
                  }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full  object-cover rounded-2xl"
                />
                <div
                  className={`absolute left-0 bottom-0 w-full bg-black/50 backdrop-blur-md text-white p-4 rounded-t-[24px] transition-transform duration-300 ${hoverIndex === index ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                  <h2 className="text-lg font-semibold">{profile.name}</h2>
                  <p className="text-sm">{profile.role}</p>
                  <div className="flex gap-3 mt-2 text-white">
                    <i className="fa-solid fa-phone-volume"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  )
}

export default News