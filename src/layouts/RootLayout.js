import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
