import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {HeroSection} from "@/components/HeroSection";
import {OrderForm} from "@/components/OrderForm";
import {ToastContainer} from "react-toastify";
import {AboutLaw} from "@/components/AboutLaw";
import {WhyUs} from "@/components/WhyUs";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Замена иностранных слов на русские | Слова по-русски",
    description: "Ваш сайт будет соответствовать федеральному закону №53-ФЗ.",
    icons: {
        icon: "/favicon.ico",
    },
    metadataBase: new URL("https://slova-po-russki.ru"),
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
    },
    alternates: {
        canonical: "https://slova-po-russki.ru",
        languages: {
            ru: "./",
            "x-default": "./",
        },
    },
}

export default function Home() {
  return (
      <>
        <Header/>
        <HeroSection />
        <AboutLaw/>
        <WhyUs/>
        <OrderForm />
        <ToastContainer />
        <Footer/>
      </>
  )
}