import React from 'react';
import Navigation from '../../components/Navigation';
import Dashboard from '../../components/Dashboard';
import CardHolder from '../../components/BillingComp/CardHolder';
import BillingInfo from '../../components/BillingInfo';
import Invoices from '../../components/BillingComp/Invoices';
import PaymentMethod from '../../components/BillingComp/PaymentMethod';
import BillingInformation from '../../components/BillingInformation';
import BillingTransaction from '../../components/BillingTransaction';

export default function BillingPage({ icon, title, text, price }) {
	return (
		<div>
			<div className='grid lg:grid-cols-10 sm:grid-cols-12'>
				<div className='col-span-2'>
					<Navigation />
				</div>
				<div className='lg:col-span-8 sm:col-span-12'>
					<Dashboard currentPage='Billing' />

					<div className='grid grid-cols-8 m-6'>
						<CardHolder />
						<BillingInfo icon='account_balance' title='Salary' text='Belong Interactive' price='2000' />
						<BillingInfo icon='paypal' title='Paypal' text='Freelance Payment' price='455.00' />
						<Invoices />
						<PaymentMethod />
						<BillingInformation />
						<BillingTransaction />
					</div>
				</div>
			</div>
		</div>
	);
}
