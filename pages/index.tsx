/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css';
import NavBar from "example/components/navbar";
import CallToAction from 'example/components/callToAction';
import AppDetails from 'example/components/appDetails';
import Testimonials from 'example/components/testimonials';
import Footer from 'example/components/footer';
import localFont from '@next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Axiforma.ttf',
      weight: '200'
    }
  ],
  variable: '--font-poppins' 
})
function Home() {

    return (
        <div className={`${poppins.variable} font-sans`}>
            <NavBar />
            <CallToAction />
            <AppDetails />
            <Testimonials />
            <Footer />
        </div> 
    )
}

export default Home;