import React from 'react';

export default function BillingInfo({ icon, title, text, price }) {
	return (
		<div className='lg:col-span-1 md:col-span-4 sm:col-span-8 flex flex-col justify-center items-center font-roboto bg-white rounded-xl shadow-2xl lg:ml-6 md:ml-0 lg:mt-0 sm:mt-6 p-6'>
			<div className='bg-blue w-16 h-16 rounded-xl flex flex-col items-center justify-center'>
				<span class='material-icons text-white'>{icon}</span>
			</div>
			<h3 className='text-md text-title font-bold my-4'>{title}</h3>
			<p className='text-iconsBg text-xs font-medium'>{text}</p>
			<h4 className='text-lg text-title font-bold mt-8'>+${price}</h4>
		</div>
	);
}
