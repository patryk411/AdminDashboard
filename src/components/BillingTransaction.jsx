import React from 'react';
import BillTransaction from './BillingComp/BillTransaction';

export default function BillingTransaction({ icon, company, date, cost }) {
	return (
		<div className='md:col-span-4 sm:col-span-8 font-roboto rounded-lg shadow-2xl bg-white mt-6 md:ml-6 sm:ml-0 p-6'>
			<div className='flex flex-row justify-between'>
				<h3 className='text-md text-title font-bold'>Your Transaction's</h3>
				<div className='flex justify-center items-center font-normal text-sm text-iconsBg'>
					<span className='material-icons'>date_range</span>
					<p className='ml-1'>23 - 30 March 2020</p>
				</div>
			</div>
			<div className='my-6'>
				<h4 className='font-bold text-iconsBg text-xs mb-4 uppercase'>newest</h4>
				<BillTransaction icon='expand_more' company='Netflix' date='27 March 2020, at 12:30 PM' cost='- $ 2,500' />
				<BillTransaction icon='expand_less' company='Apple' date='27 March 2020, at 04:30 PM' cost='+ $ 2,000' />
			</div>
			<div className='my-6'>
				<h4 className='font-bold text-iconsBg text-xs mb-4 uppercase'>YESTERDAY</h4>
				<BillTransaction icon='expand_less' company='Stripe' date='26 March 2020, at 12:30 PM' cost='+ $ 750' />
				<BillTransaction icon='expand_less' company='HubSpot' date='26 March 2020, at 04:30 PM' cost='+ $ 1,000' />
				<BillTransaction icon='expand_less' company='Creative Tim' date='26 March 2020, at 04:30 PM' cost='+ $ 2,500' />
				<BillTransaction icon='priority_high' company='Webflow' date='26 March 2020, at 04:30 PM' cost='Pending' />
			</div>
		</div>
	);
}
