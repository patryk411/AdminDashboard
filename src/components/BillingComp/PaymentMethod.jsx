import React from 'react';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';

export default function PaymentMethod() {
	return (
		<div className='lg:col-span-5 sm:col-span-8 rounded-lg shadow-2xl font-roboto p-4 mt-6'>
			<div className='flex flex-col justify-between'>
				<div className='flex flex-row justify-between items-center'>
					<h3 className='font-bold text-title text-md'>Payment Method</h3>
					<button className='rounded-md bg-bgDark uppercase font-bold text-xs px-6 py-2.5 text-white'>
						+ add new card
					</button>
				</div>
				<div className='flex md:flex-row sm:flex-col justify-between mt-6 gap-4'>
					<div className='flex flex-row justify-between md:w-1/2 sm:w-full p-6 border border-border rounded-lg'>
						<div className='flex flex-row items-center'>
							<img src={mastercard} className='w-10 h-7 mr-4' alt='' />
							<div className='text-md font-bold text-title'>
								<span>**** </span>
								<span>**** </span>
								<span>**** </span>
								<span>7852</span>
							</div>
						</div>
						<div className='ml-16'>
							<span class='material-icons text-xl text-title'>edit</span>
						</div>
					</div>
					<div className='flex flex-row justify-between md:w-1/2 sm:w-full p-6 border border-border rounded-lg'>
						<div className='flex flex-row items-center'>
							<img src={visa} className='w-10 h-7 mr-4' alt='' />
							<div className='text-md font-bold text-title'>
								<span>**** </span>
								<span>**** </span>
								<span>**** </span>
								<span>5248</span>
							</div>
						</div>
						<div className='ml-16'>
							<span class='material-icons text-xl text-title'>edit</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
