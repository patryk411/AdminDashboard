import React from 'react';
import Navigation from '../../components/Navigation';
import Dashboard from '../../components/Dashboard';
import ProfileBoard from '../../components/ProfileBoard';

export default function Profile() {
	return (
		<div>
			<div className='grid lg:grid-cols-10 sm:grid-cols-12 mb-6'>
				<div className='col-span-2'>
					<Navigation />
				</div>
				<div className='lg:col-span-8 sm:col-span-12'>
					<Dashboard currentPage='Profile' />
					<div className='mr-6 lg:ml-0 sm:ml-6'>
						<ProfileBoard />
					</div>
				</div>
			</div>
		</div>
	);
}
