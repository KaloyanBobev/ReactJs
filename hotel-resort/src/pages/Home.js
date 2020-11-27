import React from 'react'
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRooms';
import Button from '../components/StyledHero';


export default function Home() {
    return (
        <>
            <Hero hero={'defaultHero'}>
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe room starting at £299" >
                    <Link to='/rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
            <Button >TEXT</Button>
        </>
    )
}
