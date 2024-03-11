import React from 'react';

export default function TableProjectsHeading({ tabTitle1, tabTitle2, tabTitle3, tabTitle4, tabTitle5 }) {
	return (
		<div className='grid grid-cols-10 mb-3'>
			<div className='col-span-3'>
				<p className='text-small+ text-iconsBg font-bold'>{tabTitle1}</p>
			</div>
			<div className='col-span-2 flex flex-col items-center'>
				<p className='text-small+ text-iconsBg font-bold'>{tabTitle2}</p>
			</div>
			<div className='col-span-2 flex flex-col items-center'>
				<p className='text-small+ text-iconsBg font-bold'>{tabTitle3}</p>
			</div>
			<div className='col-span-2 flex flex-col items-center'>
				<p className='text-small+ text-iconsBg font-bold'>{tabTitle4}</p>
			</div>
			<div className='col-span-1 flex flex-col items-center'>
				<p className='text-small+ text-iconsBg font-bold'>{tabTitle5}</p>
			</div>
		</div>
	);
}
