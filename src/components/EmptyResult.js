import React, { useState } from 'react';
import img from './no_data.png'

const EmptyResult = () => {
    return (<div className='results-section'>
        <h2 className='jd--heading'>Parsed Information</h2>
        <div className='nodata_div'><img src={img} /><p>No parsed information to show</p></div>
        
    </div>)
}

export default EmptyResult;