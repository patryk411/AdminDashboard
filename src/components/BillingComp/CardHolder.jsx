import React from 'react';
import treeBg from '../../assets/tree.svg';
import mastercard from '../../assets/mastercard.png';

export default function CardHolder() {
	return (
		<div className='lg:col-span-3 sm:col-span-8 relative font-roboto bg-blackBg rounded-lg shadow-2xl'>
			<img src={treeBg} className='absolute opacity-15' alt='' />
			<div className='p-4 opacity-100'>
				<span class='material-icons text-white'>wifi</span>
				<h4 className='text-xl pt-6 pb-9 text-white font-bold pb-2'>4562 1122 4594 7852</h4>
				<div className='flex flex-row items-center justify-between'>
					<div className='flex flex-row'>
						<div className='flex flex-col'>
							<h5 className='text-sm text-white font-medium opacity-80'>Card Holder</h5>
							<p className='text-md text-white font-bold'>Jack Peterson</p>
						</div>
						<div className='flex flex-col ml-6'>
							<h5 className='text-sm text-white font-medium opacity-80'>Expires</h5>
							<p className='text-md text-white font-bold'>11/22</p>
						</div>
					</div>
					<img src={mastercard} className='h-8 w-11' alt='' />
				</div>
			</div>
		</div>
	);
}
