import React from 'react';
import TablesBar from './TablesComp/TablesBar';
import TableProjectsHeading from './TablesComp/TableProjectsHeading';
import TableTrProjects from './ProjectBoardTr/TableTrProjects';
import { projectsNames } from '../data/projectsTable';

export default function TableProjects({
	barTitle,
	projectBudget,
	projectName,
	tabTitle1,
	tabTitle2,
	tabTitle3,
	tabTitle4,
	tabTitle5,
	projectCmplt,
}) {
	return (
		<div className='mx-12 my-12 font-roboto bg-white shadow-lg shadow-boxShadow rounded-xl px-4 pb-6'>
			<TablesBar barTitle={barTitle} />
			<div className='mt-6'>
				<TableProjectsHeading
					tabTitle1={tabTitle1}
					tabTitle2={tabTitle2}
					tabTitle3={tabTitle3}
					tabTitle4={tabTitle4}
					tabTitle5={tabTitle5}
				/>
				<TableTrProjects
					projectImg={projectsNames.project1.img}
					projectName={projectsNames.project1.name}
					projectBudget={projectsNames.project1.budget}
					projectStatus={projectsNames.project1.status}
					projectCmplt='60'
				/>
				<TableTrProjects
					projectImg={projectsNames.project2.img}
					projectName={projectsNames.project2.name}
					projectBudget={projectsNames.project2.budget}
					projectStatus={projectsNames.project2.status}
					projectCmplt='100'
				/>
				<TableTrProjects
					projectImg={projectsNames.project3.img}
					projectName={projectsNames.project3.name}
					projectBudget={projectsNames.project3.budget}
					projectStatus={projectsNames.project3.status}
					projectCmplt='30'
				/>
				<TableTrProjects
					projectImg={projectsNames.project4.img}
					projectName={projectsNames.project4.name}
					projectBudget={projectsNames.project4.budget}
					projectStatus={projectsNames.project4.status}
					projectCmplt='80'
				/>
				<TableTrProjects
					projectImg={projectsNames.project5.img}
					projectName={projectsNames.project5.name}
					projectBudget={projectsNames.project5.budget}
					projectStatus={projectsNames.project5.status}
					projectCmplt='0'
				/>
				<TableTrProjects
					projectImg={projectsNames.project6.img}
					projectName={projectsNames.project6.name}
					projectBudget={projectsNames.project6.budget}
					projectStatus={projectsNames.project6.status}
					projectCmplt='100'
				/>
			</div>
		</div>
	);
}
