/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css';
import NavBar from "example/components/navbar";
import CallToAction from 'example/components/callToAction';
import AppDetails from 'example/components/appDetails';
import Testimonials from 'example/components/testimonials';
import Footer from 'example/components/footer';

function Home() {

    return (
        <div className=''>
            <NavBar />
            <CallToAction />
            <AppDetails />
            <Testimonials />
            <Footer />
        </div> 
    )
}

export default Home;