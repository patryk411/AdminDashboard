import React from 'react';

export default function NewOverview({ icon, title, time }) {
	return (
		<div className='flex flex-row mb-6'>
			<div
				className={`w-8 h-8 flex items-center justify-center rounded-full ${
					icon === 'inventory_2'
						? 'bg-orange'
						: icon === 'shopping_cart'
						? 'bg-blue'
						: icon === 'payment'
						? 'bg-gold'
						: icon === 'vpn_key'
						? 'bg-pink'
						: 'bg-green'
				}`}>
				<span class='material-icons text-xs text-white'>{icon}</span>
			</div>
			<div className='flex flex-col ml-4'>
				<h4 className='font-bold text-title text-sm'>{title}</h4>
				<p className='font-light text-iconsBg text-xs'>{time}</p>
			</div>
		</div>
	);
}
