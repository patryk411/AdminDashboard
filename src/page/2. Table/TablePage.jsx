import React from 'react';
import Dashboard from '../../components/Dashboard';
import Navigation from '../../components/Navigation';
import Table from '../../components/Table';
import TableProjects from '../../components/TableProjects';
import TablesBar from '../../components/TablesComp/TablesBar';

export default function TablePage({ currentPage, barTitle, tabTitle1, tabTitle2, tabTitle3, tabTitle4, tabTitle5 }) {
	return (
		<div>
			<div className='grid lg:grid-cols-10 sm:grid-cols-12'>
				<div className='col-span-2'>
					<Navigation />
				</div>
				<div className='lg:col-span-8 sm:col-span-12'>
					<Dashboard currentPage='Tables' />
					<Table
						barTitle='Authors Table'
						tabTitle1='AUTHOR'
						tabTitle2='FUNCTION'
						tabTitle3='STATUS'
						tabTitle4='EMPLOYED'
						tabTitle5='ACTION'></Table>
					<TableProjects
						barTitle='Projects Table'
						tabTitle1='PROJECT'
						tabTitle2='BUDGET'
						tabTitle3='STATUS'
						tabTitle4='COMPLETION'
						tabTitle5='ACTION'
					/>
				</div>
			</div>
		</div>
	);
}
