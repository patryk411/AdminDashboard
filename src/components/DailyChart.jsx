import React from 'react';
import { Chart as ChartJS, Legend, defaults } from 'chart.js/auto';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

import websiteViews from '../data/websiteViews.json';
import dailySales from '../data/dailySales.json';
import completedTasks from '../data/completedTasks.json';
defaults.responsive = true;

defaults.color = '#fff';

export default function DailyChart() {
	const config = {
		options: {
			scales: {
				x: {
					ticks: {
						color: ['rgb(236, 64, 122)'],
					},
				},
			},
		},
	};

	return (
		<div className='grid grid-cols-3 font-roboto'>
			<div className='col-span-1 ml-6 mt-6 bg-white shadow-lg shadow-boxShadow rounded-xl'>
				<div className='bg-blue rounded-xl py-4 px-2 m-4'>
					<Bar
						data={{
							labels: websiteViews.map(data => data.label),
							datasets: [
								{
									label: 'Website Views',
									data: websiteViews.map(data => data.value),
									backgroundColor: ['rgb(255,255,255)'],
									borderRadius: 5,
									width: 10,
									barThickness: 5,
								},
							],
						}}
						options={config}
					/>
				</div>
				<div className='p-4 '>
					<div className=''>
						<h3 className='font-bold text-title text-md'>Website Views</h3>
						<p className='text-iconsBg text-sm mt-1'>Last Campaign Performance</p>
					</div>
					<div className='h-px w-48 bg-separator my-4'></div>
					<div className='text-iconsBg flex flex-row'>
						<span class='material-icons text-sm text-iconBg mr-1'>schedule</span>
						<p className='text-sm text-iconsBg'>camaign sent 2 days ago</p>
					</div>
				</div>
			</div>
			<div className='col-span-1 ml-6 mt-6 bg-white shadow-lg shadow-boxShadow rounded-xl'>
				<div className='bg-green rounded-xl py-4 px-2 m-4'>
					<Line
						data={{
							labels: dailySales.map(data => data.label),
							datasets: [
								{
									label: 'Sales',
									data: dailySales.map(data => data.value),
									borderColor: ['rgb(255,255,255)'],
									borderRadius: 5,
									width: 10,
									barThickness: 5,
								},
							],
						}}
						options={config}
					/>
				</div>
				<div className='p-4 '>
					<div className=''>
						<h3 className='font-bold text-title text-md'>Daily Sales</h3>
						<p className='text-iconsBg text-sm mt-1'>
							<span>(+15%)</span> increse in today sales
						</p>
					</div>
					<div className='h-px w-48 bg-separator my-4'></div>
					<div className='text-iconsBg flex flex-row'>
						<span class='material-icons text-sm text-iconBg mr-1'>schedule</span>
						<p className='text-sm text-iconsBg'>updated 4 min ago</p>
					</div>
				</div>
			</div>
			<div className='col-span-1 ml-6 mt-6 mr-6 bg-white shadow-lg shadow-boxShadow rounded-xl'>
				<div className='bg-blackBg rounded-xl py-4 px-2 m-4'>
					<Line
						data={{
							labels: completedTasks.map(data => data.label),
							datasets: [
								{
									label: 'Tasks',
									data: completedTasks.map(data => data.value),
									borderColor: ['rgb(255,255,255)'],
									borderRadius: 5,
									width: 10,
									barThickness: 5,
								},
							],
						}}
						options={config}
					/>
				</div>
				<div className='p-4 '>
					<div className=''>
						<h3 className='font-bold text-title text-md'>Complated Tasks</h3>
						<p className='text-iconsBg text-sm mt-1'>Last Campaign Performance</p>
					</div>
					<div className='h-px w-48 bg-separator my-4'></div>
					<div className='text-iconsBg flex flex-row'>
						<span class='material-icons text-sm text-iconBg mr-1'>schedule</span>
						<p className='text-sm text-iconsBg'>just updated</p>
					</div>
				</div>
			</div>
		</div>
	);
}
