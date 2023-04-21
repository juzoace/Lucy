/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import NavBar from "example/components/navbar";
import CallToAction from 'example/components/callToAction';
import AppDetails from 'example/components/appDetails';
import Testimonials from 'example/components/testimonials';

function Home() {

    return (
        <div className='box-border m-0'>
            <NavBar />
            <CallToAction />
            <AppDetails />
            {/* <Testimonials /> */}
        </div> 
    )
}

export default Home;