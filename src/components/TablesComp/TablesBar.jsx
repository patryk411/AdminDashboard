import React from 'react';

export default function TablesBar({ barTitle }) {
	return (
		<div className='mx-3 bg-blue py-6 px-4 rounded-lg'>
			<h3 className='text-md text-white font-bold'>{barTitle}</h3>
		</div>
	);
}
