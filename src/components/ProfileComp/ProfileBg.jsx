import React from 'react';
import bgImg from '../../assets/profileBg.jpeg';

export default function ProfileBg() {
	return (
		<div className='relative -z-10'>
			<img className='w-full h-profileH object-cover rounded-xl' src={bgImg} alt='' />
			<div className='bg-bgShdow w-full h-profileH rounded-xl absolute top-0 left-0 right-0 bottom-0'></div>
		</div>
	);
}
