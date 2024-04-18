import React from 'react';
import styles from './Slide2.module.css';

const Slide2 = () => {
  return (
    <div className={`${styles.Slide2BG} flex items-center`}>
        <div className='flex flex-col items-center gap-2'>
            <span className='font-semibold text-3xl '>Smartphones</span>
            <span className='font-semibold '>Elevate Your Smart Phone Experience</span>
        <a className='bg-black text-white  font-bold p-1 mt-14 rounded-md ' href='#'>Learn More</a>
        </div>
  
  </div>
  )
}

export default Slide2