import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-red-400 rounded-xl p-5'>
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>
            {/* card body */}
            <div  className='bg-gray-500 p-4 rounded-xl mt-10 flex-1/2'>
                <p>{description}</p>
                {
                    features.map((feature, index)=> <PricingFeature 
                    key={index} 
                    feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full mt-5'>Subscribe</button>
        </div>
    );
};

export default PricingCard;