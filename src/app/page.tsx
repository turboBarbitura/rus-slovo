import Head from 'next/head'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {HeroSection} from "@/components/HeroSection";
import {OrderForm} from "@/components/OrderForm";
import {ToastContainer} from "react-toastify";
import {AboutLaw} from "@/components/AboutLaw";
import {WhyUs} from "@/components/WhyUs";

export default function Home() {
  return (
      <>
        <Head>
          <title>Рус-Слово.рф - Приведение сайтов в соответствие с законом о государственном языке</title>
          <meta name="description" content="Профессиональная замена иностранных слов на русские на вашем сайте. Соответствие федеральному закону №53-ФЗ." />
          <link rel="canonical" href="https://рус-слово.рф/" />
        </Head>
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