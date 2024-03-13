import React from 'react';
import heroBg from '../../assets/signupBg.jpeg';
import SignNav from '../SignInComp/SignNav';

export default function SignBg() {
	return (
		<div className='flex flex-col items-center relative m-4'>
			<SignNav />
			<img className='w-full h-signupH rounded-xl object-cover' src={heroBg} alt='' />
			<div className='bg-blackBgShadow2 w-full h-signupH rounded-xl absolute top-0 left-0 right-0 bottom-0'></div>
		</div>
	);
}
