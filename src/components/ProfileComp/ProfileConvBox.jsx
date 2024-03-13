import React from 'react';

export default function ProfileConvBox({ img, name, text }) {
	return (
		<div className='flex flex-row justify-between mb-2'>
			<div className='flex flex-row items-center'>
				<img className='w-12 h-12 rounded-full mr-4' src={img} alt='' />
				<div className='flex flex-col'>
					<h5 className='font-bold text-sm text-title'>{name}</h5>
					<p className='font-light text-xs text-iconsBg'>{text}</p>
				</div>
			</div>
			<a className='px-2.5 py-6 text-blue uppercase text-xs font-bold' href=''>
				reply
			</a>
		</div>
	);
}
