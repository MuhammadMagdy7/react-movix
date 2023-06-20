import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwithTabs from '../../../components/swithTabs/SwithTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {

    const [endPoint, setEndPoint] = useState('day')

    const {data, loading} = useFetch(`/trending/all/${endPoint}`)

    const onTabChange = (tab) => {
        setEndPoint(tab === 'Day' ? 'day': 'week')
    };
  return (
    <div className="carouselSection">
        <div className='flex items-center justify-between mx-12' >
            <span className="carouselTitle">Trending</span>
            <SwithTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
        <div className='py-7'>
        <Carousel data={data?.results} loading={loading} endPoint={endPoint} />

        </div>

    </div>
  )
}

export default Trending