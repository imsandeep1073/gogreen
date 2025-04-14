import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/preNav/Nav";
import Header from "@/components/header/Header";
import Banner from "@/components/pages/landing/banner/Banner";
import Landingpage from "@/components/pages/landing/Landingpage";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Landingpage />
      <Footer />
    </div>
  );
}
