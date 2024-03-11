import React from 'react';

export default function BillTransaction({ icon, company, date, cost }) {
	return (
		<div className='py-2 pr-4 mb-2 flex flex-row justify-between items-center'>
			<div className='flex flex-row'>
				<div
					className={`flex flex-col justify-center items-center mr-4 w-9 h-9 rounded-full ${
						icon === 'expand_less' ? 'border-green' : icon === 'expand_more' ? 'border-orange' : 'border-title'
					} border`}>
					<span
						className={`material-icons text-lg ${
							icon === 'expand_less' ? 'text-green' : icon === 'expand_more' ? 'text-orange' : 'text-title'
						}`}>
						{icon}
					</span>
				</div>
				<div>
					<h5 className='font-bold text-sm text-title mb-1'>{company}</h5>
					<p className='text-xs text-iconsBg font-light'>{date}</p>
				</div>
			</div>
			<div>
				<p
					className={`font-bold text-sm ${
						icon === 'expand_less' ? 'text-green' : icon === 'expand_more' ? 'text-orange' : 'text-title'
					}`}>
					{cost}
				</p>
			</div>
		</div>
	);
}
