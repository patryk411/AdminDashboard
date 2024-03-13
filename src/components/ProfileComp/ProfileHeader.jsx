import React from 'react';
import person from '../../assets/per4.jpg';

export default function ProfileHeader() {
	return (
		<div className='flex md:flex-row sm:flex-col justify-between items-center'>
			<div className='flex flex-row items-center'>
				<img className='w-20 h-20 rounded-full' src={person} alt='' />
				<div className='flex flex-col ml-6'>
					<h3 className='text-xl text-title font-bold'>Richard Davis</h3>
					<p className='text-sm text-iconsBg font-normal'>CEO / Co-Founder</p>
				</div>
			</div>
			<div className='md:mt-0 sm:mt-6'>
				<div className='p-px bg-iconsBg rounded-lg'>
					<button className='flex flex-row items-center bg-white text-title font-normal px-5 md:py-2 sm:py-1 rounded-lg'>
						<span className='material-icons'>home</span>
						App
					</button>
				</div>
			</div>
		</div>
	);
}
