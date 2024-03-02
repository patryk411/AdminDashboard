import React from 'react';

export default function ProjectsTr({
	pgImg,
	pbDesc,
	pbMember1,
	pbMember2,
	pbMember3,
	pbMember4,
	pbBudget,
	pbProgress,
}) {
	return (
		<div className='border-t-2 grid grid-cols-6'>
			<div className='col-span-3 py-3 flex flex-row items-center'>
				<img className='w-8 h-8' src={pgImg} alt='' />
				<span className='text-sm ml-2 font-bold text-title text-iconsBg'>{pbDesc}</span>
			</div>
			<div className='col-span-1 flex flex-row justify-start items-center relative'>
				<span className='absolute left-2'>
					<img className='w-5 h-5 rounded-full border-white border' src={pbMember1} alt='' />
				</span>
				<span className='absolute left-5'>
					<img className='w-5 h-5 rounded-full border-white border' src={pbMember2} alt='' />
				</span>
				<span className='absolute left-8'>
					<img className='w-5 h-5 rounded-full border-white border' src={pbMember3} alt='' />
				</span>
				<span className='absolute left-11'>
					<img className='w-5 h-5 rounded-full border-white border' src={pbMember4} alt='' />
				</span>
			</div>
			<div className='col-span-1 flex flex-col justify-center text-center'>
				<p className='font-bold text-xs text-title'>{pbBudget}</p>
			</div>
			<div className='col-span-1 flex flex-col justify-center'>
				<div class='bg-boxShadow rounded-xl shadow-sm overflow-hidden'>
					<div class='relative h-1.5 flex items-center justify-center'>
						<div
							class={`absolute top-0 bottom-0 left-0 rounded-lg w-[60%] bg-blue ${
								pbDesc === 'Add Progress Track'
									? 'w-[10%] bg-blue'
									: pbDesc === 'Fix Platform Errors'
									? 'w-[100%] bg-green'
									: pbDesc === 'Launch our Mobile App'
									? 'w-[25%] bg-blue'
									: pbDesc === 'Add the New Pricing Page'
									? 'w-[45%] bg-blue'
									: ''
							}`}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
