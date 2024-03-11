import React from 'react';

export default function BillingInfoBox({ name, companyName, email, vat }) {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col mt-4 p-6 bg-bgWhite'>
				<div className='flex flex-row justify-between items-center'>
					<h4 className='text-sm text-title font-bold'>{name}</h4>
					<div className='flex flex-row'>
						<p className='flex justify-center items-center text-xs p-3 text-orange font-bold uppercase'>
							<span class='material-icons text-sm mr-2'>delete</span>
							delete
						</p>
						<p className='flex justify-center items-center p-3 text-title text-xs font-bold uppercase'>
							<span class='material-icons text-sm text-title mr-2'>edit</span>edit
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='pt-6'>
						<p className='text-xs text-iconsBg font-light flex flex-row justify-start mb-2'>
							Company Name: <span className='font-bold text-title ml-2'>{companyName}</span>
						</p>
						<p className='text-xs text-iconsBg font-light flex flex-row justify-start mb-2'>
							Email Address: <span className='font-bold text-title ml-2'>{email}</span>
						</p>
						<p className='text-xs text-iconsBg font-light flex flex-row justify-start'>
							VAT Number: <span className='font-bold text-title ml-2'>{vat}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
