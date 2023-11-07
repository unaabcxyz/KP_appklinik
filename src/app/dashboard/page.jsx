import Footer from "@/component/dashboard/Footer";
import Cards from "@/component/dashboard/Cards";
import Tables from "@/component/dashboard/Tables";
import SideNav from "@/component/dashboard/SideNav";
import Header from "@/component/dashboard/Header";
import Pagination from "@/component/dashboard/Pagination";
import HoverDevCards from "@/component/dashboard/HoverDevCards"

export default function page() {
    return (
        <main className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full">
            <div className="w-full px-6 py-6 mx-auto">
                <Header />

                <Tables />
                <Pagination />
                <Footer />
            </div>
        </main>
    );
}
