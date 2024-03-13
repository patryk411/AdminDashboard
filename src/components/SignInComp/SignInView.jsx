import React from 'react';
import heroImg from '../../assets/signinBg.jpeg';

export default function SignInView() {
	return (
		<div className='relative -z-10'>
			<img className='h-screen w-full object-cover' src={heroImg} alt='' />
			<div className='bg-blackBgShadow w-full absolute top-0 left-0 right-0 bottom-0'></div>
		</div>
	);
}
