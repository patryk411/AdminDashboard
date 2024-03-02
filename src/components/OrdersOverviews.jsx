import React from 'react';
import NewOverview from './OrdersOverv/NewOverview';

export default function OrdersOverviews({ icon, title, time }) {
	return (
		<div className='col-span-1 ml-6 p-6 font-roboto bg-white shadow-lg shadow-boxShadow rounded-xl'>
			<div>
				<h3 className='text-title text-md font-bold'>Orders overviews</h3>
				<div className='flex flex-row justify-start items-start text-sm my-4'>
					<span class='material-icons text-green text-sm font-bold mr-2'>arrow_upward</span>
					<p className='text-iconsBg'>
						<span className='font-bold'>24%</span> this month
					</p>
				</div>
				<div className='py-6 relative'>
					<NewOverview icon='notifications' title='New order #1832412' time='21 DEC 11 PM' />
					<NewOverview icon='inventory_2' title='$2400, Design changes' time='22 DEC 7:20 PM' />
					<NewOverview icon='shopping_cart' title='Server payments for April' time='21 DEC 9:34 PM' />
					<NewOverview icon='payment' title='New card added for order #4395133' time='20 DEC 2:20 AM' />
					<NewOverview icon='vpn_key' title='New card added for order #4395133' time='18 DEC 4:54 AM' />
				</div>
			</div>
		</div>
	);
}
