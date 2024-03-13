import React from 'react';
import SwitchToggle from '../UI/SwitchToggle.jsx';

export default function ProfileBox({ label }) {
	return (
		<div className='lg:col-span-1 md:col-span-1 mt-6 pl-2 pt-2'>
			<h3 className='font-bold text-title text-md p-4'>Platform Settings</h3>
			<div className='px-4 md:py-2 sm:pb-4'>
				<h5 className='font-bold text-iconsBg uppercase text-xs mb-3'>account</h5>
				<SwitchToggle label='Email me when someone follows me' defaultChecked />
				<SwitchToggle label='Email me when someone follows me' />
				<SwitchToggle label='Email me when someone follows me' defaultChecked />
			</div>
			<div className='px-4 md:py-2 sm:pb-4'>
				<h5 className='font-bold text-iconsBg uppercase text-xs mb-3'>application</h5>
				<SwitchToggle label='New launches and projects' />
				<SwitchToggle label='Monthly product updates' defaultChecked />
				<SwitchToggle label='Subscribe to newsletter' />
			</div>
		</div>
	);
}
