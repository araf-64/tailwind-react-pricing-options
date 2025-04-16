import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-1 items-center mt-2'> <IoIosCheckmarkCircle></IoIosCheckmarkCircle> {feature}</p>
    );
};

export default PricingFeature;