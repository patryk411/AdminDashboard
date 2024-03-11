import React from 'react';
import atlassian from '../assets/atlassian.svg';
import invs from '../assets/invision.svg';
import jira from '../assets/jira.svg';
import slack from '../assets/slack.svg';
import spotify from '../assets/spotify.svg';
import per1 from '../assets/per1.jpg';
import per2 from '../assets/per2.jpg';
import per3 from '../assets/per3.jpg';
import per4 from '../assets/per4.jpg';
import xd from '../assets/xd.svg';
import ProjectsTr from './ProjectBoardTr/ProjectsTr';

export default function ProjectBoard({
	pgImg,
	pbDesc,
	pbMember1,
	pbMember2,
	pbMember3,
	pbMember4,
	pbBudget,
	pbProgress,
}) {
	const now = 60;

	return (
		<div className='lg:col-span-2 sm:col-span-3 py-6 font-roboto bg-white shadow-lg shadow-boxShadow rounded-xl'>
			<div className='flex flex-row  justify-between items-center px-6'>
				<div>
					<h3 className='text-md text-title font-bold capitalize mb-2'>Projects</h3>
					<p className='flex flex-row items-end text-sm text-iconsBg'>
						<span class='material-icons text-blue'>done</span>
						<span className='mr-1 font-bold'>30 done</span> <span>this month</span>
					</p>
				</div>
				<div>
					<span class='material-icons text-iconsBg'>more_vert</span>
				</div>
			</div>
			<div className='px-6 py-6'>
				<div className='grid grid-cols-6 py-3'>
					<div className='col-span-3 text-iconsBg uppercase text-xs'>
						<p>campanies</p>
					</div>
					<div className='col-span-1 text-iconsBg uppercase text-xs'>
						<p>members</p>
					</div>
					<div className='col-span-1 text-iconsBg uppercase text-xs text-center'>
						<p>budget</p>
					</div>
					<div className='col-span-1 text-iconsBg uppercase text-xs text-center'>
						<p>completion</p>
					</div>
				</div>
				<ProjectsTr
					pgImg={xd}
					pbDesc='Material UI XD Version'
					pbMember1={per1}
					pbMember2={per2}
					pbMember3={per3}
					pbMember4={per4}
					pbBudget='$14,000'
				/>
				<ProjectsTr pgImg={atlassian} pbDesc='Add Progress Track' pbMember2={per2} pbMember4={per4} pbBudget='$3,000' />
				<ProjectsTr pgImg={slack} pbDesc='Fix Platform Errors' pbMember1={per1} pbMember3={per3} pbBudget='Not set' />
				<ProjectsTr
					pgImg={spotify}
					pbDesc='Launch our Mobile App'
					pbMember1={per1}
					pbMember2={per2}
					pbMember3={per3}
					pbMember4={per4}
					pbBudget='$20,500'
				/>
				<ProjectsTr pgImg={jira} pbDesc='Add the New Pricing Page' pbMember4={per4} pbBudget='$500' />
				<ProjectsTr
					pgImg={invs}
					pbDesc='Redesign New Online Shop'
					pbMember1={per1}
					pbMember4={per4}
					pbBudget='$2,000'
				/>
			</div>
		</div>
	);
}
