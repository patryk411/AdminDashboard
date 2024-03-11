import React from 'react';
import BillingInfoBox from './BillingComp/BillingInfoBox';

export default function BillingInformation({ name, companyName, email, vat }) {
	return (
		<div className='md:col-span-4 sm:col-span-8 font-roboto rounded-lg shadow-2xl bg-white mt-6 p-6'>
			<h3 className='text-md text-title font-bold'>Billing Information</h3>
			<BillingInfoBox name='Oliver Liam' companyName='Viking Burrito' email='oliver@burrito.com' vat='FRB1235476' />
			<BillingInfoBox name='Lucas Harper' companyName='Stone Tech Zone' email='lucas@stone-tech.com' vat='FRB1235476' />
			<BillingInfoBox name='Ethan James' companyName='Fiber Notion' email='ethan@fiber.com' vat='FRB1235476' />
		</div>
	);
}
