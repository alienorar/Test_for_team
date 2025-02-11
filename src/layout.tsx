import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components";

const Layout: React.FC = () => {
    return (
        <>
            <div className=" flex flex-col justify-between h-[100vh] ">
                <Header />
                <main className="py-[40px] lg:py-[120px] md:py-[100px]">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
