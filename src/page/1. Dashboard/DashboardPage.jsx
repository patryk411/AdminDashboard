import React from 'react';
import Dashboard from '../../components/Dashboard';
import Navigation from '../../components/Navigation';
import DailyInfo from '../../components/DailyInfo';
import DailyChart from '../../components/DailyChart';
import ProjectBoard from '../../components/ProjectBoard';
import OrdersOverviews from '../../components/OrdersOverviews';

export default function DashboardPage({ currentPage }) {
	return (
		<div>
			<div className='grid lg:grid-cols-10'>
				<div className='lg:col-span-2'>
					<Navigation />
				</div>
				<div className='lg:col-span-8 md:col-span-12'>
					<Dashboard currentPage='Dashboard' />
					<DailyInfo />
					<DailyChart />
					<div className='grid grid-cols-3 m-6'>
						<ProjectBoard />
						<OrdersOverviews />
					</div>
				</div>
			</div>
		</div>
	);
}
