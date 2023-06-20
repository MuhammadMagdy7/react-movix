import React, { useState } from 'react'
import SwithTabs from '../../../components/swithTabs/SwithTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Popular = () => {

    const [endPoint, setEndPoint] = useState('movie')

    const {data, loading} = useFetch(`/${endPoint}/popular`)

    const onTabChange = (tab) => {
        setEndPoint(tab === 'Movie' ? 'movie': 'tv')
    };
  return (
    <div className="carouselSection">
        <div className='flex items-center justify-between mx-12' >
            <span className="carouselTitle">What's Popular</span>
            <SwithTabs data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
        </div>
        <div className='py-7'>
        <Carousel data={data?.results} loading={loading} endPoint={endPoint} />

        </div>

    </div>
  )
}

export default Popular