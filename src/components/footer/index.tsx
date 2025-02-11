import FooterLogo from '../../assets/footer-logo.svg'


const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6 rounded-t-[30px] custom-container  h-[300px]">
      <div className=" flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 py-[30px] px-[20px]">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-start gap-4">
         <img src={FooterLogo} alt="logo" />
          <p className="text-sm">Ijod va san’atga bag‘ishlangan platforma, har bir asar va dizaynning orqasida ilhom va kuchli g‘oya turadi.</p>
          <div className="flex gap-4 text-center lg:text-start ">
            <i className="fa-brands fa-telegram "></i>
            <i className="fa-solid fa-phone-volume"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        {/* Center Section */}
        <div className="w-full lg:w-1/3 text-center">
          <h3 className="font-semibold text-lg">Asosiy</h3>
          <ul className="space-y-2 mt-2">
            <li><a href="#" className="hover:underline">Xizmatlar</a></li>
            <li><a href="#" className="hover:underline">Biz Haqimizda</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 lg:text-right text-center ">
          <p><i className="fa-solid fa-phone-volume"></i> +998 99 999 99 99</p>
          <p><i className="fa-solid fa-envelope"></i> example@gmail.com</p>
          <p><i className="fa-solid fa-location-dot"></i> O‘zbekiston barcha hududlarda</p>
        </div>
      </div>
      <p className="text-center text-sm mt-6">© 2025 Tasviriyoyina.uz. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
};

export default Footer;
