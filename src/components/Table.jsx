import React from 'react';
import per1 from '../assets/per1.jpg';
import per2 from '../assets/per2.jpg';
import per3 from '../assets/per3.jpg';
import per4 from '../assets/per4.jpg';
import TableTr from './ProjectBoardTr/TableTr';
import TablesBar from './TablesComp/TablesBar';
import TableHeading from './TablesComp/TableHeading';
import { useState } from 'react';

export default function Table({ barTitle, tabTitle1, tabTitle2, tabTitle3, tabTitle4, tabTitle5 }) {
	const [tableData, setTableData] = useState([
		{
			img: per2,
			userName: 'John Michael',
			userMail: 'john@creative-tim.com',
			userFn: 'Manager',
			userFn2: 'Organization',
			userStatus: 'Online',
			userEmployed: '23/04/18',
		},
		{
			img: per3,
			userName: 'Alexa Liras',
			userMail: 'alexa@creative-tim.com',
			userFn: 'Programator',
			userFn2: 'Developer',
			userStatus: 'Offline',
			userEmployed: '11/01/19',
		},
		{
			img: per1,
			userName: 'Laurent Perrier',
			userMail: 'laurent@creative-tim.com',
			userFn: 'Executive',
			userFn2: 'Projects',
			userStatus: 'Online',
			userEmployed: '19/09/17',
		},
		{
			img: per4,
			userName: 'Michael Levi',
			userMail: 'michael@creative-tim.com',
			userFn: 'Programator',
			userFn2: 'Developer',
			userStatus: 'Online',
			userEmployed: '24/12/08',
		},
		{
			img: per1,
			userName: 'Miriam Eric',
			userMail: 'miriam@creative-tim.com',
			userFn: 'Programator',
			userFn2: 'Developer',
			userStatus: 'Offline',
			userEmployed: '14/09/20',
		},
	]);

	const handleTableRowUpdate = (index, newData) => {
		const updatedTableData = [...tableData];
		updatedTableData[index] = newData;
		setTableData(updatedTableData);
	};

	return (
		<div className='md:mx-12 sm:mx-6 md:mt-12 sm:mt-6 font-roboto bg-white shadow-lg shadow-boxShadow rounded-xl px-4 pb-6'>
			<TablesBar barTitle={barTitle} />
			<div className='mt-6'>
				<TableHeading
					tabTitle1={tabTitle1}
					tabTitle2={tabTitle2}
					tabTitle3={tabTitle3}
					tabTitle4={tabTitle4}
					tabTitle5={tabTitle5}
				/>
				{tableData.map((rowData, index) => (
					<TableTr
						key={index}
						img={rowData.img}
						userName={rowData.userName}
						userMail={rowData.userMail}
						userFn={rowData.userFn}
						userFn2={rowData.userFn2}
						userStatus={rowData.userStatus}
						userEmployed={rowData.userEmployed}
						onUpdate={newData => handleTableRowUpdate(index, newData)}
					/>
				))}
			</div>
		</div>
	);
}
