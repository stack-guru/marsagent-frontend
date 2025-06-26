import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";

export default function MainLayout() {
  return (
    <div className='w-full'>
      <div className='bg-img'></div>
      <Header />
      <Sidebar />
      <section className="relative z-[99]">
        <section className='py-[30px] md:py-[80px]'>
          <div className="container mx-auto">
            <Outlet />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  )
}
