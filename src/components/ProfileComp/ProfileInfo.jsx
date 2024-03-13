import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBox from './ProfileBox';
import ProfileInformation from './ProfileInformation';
import ProfileConv from './ProfileConv';
import ProfileProjects from './ProfileProjects';
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import home4 from '../../assets/home4.jpeg';
import ProfileProjectsHead from './ProfileProjectsHead';

export default function ProfileInfo({ projectImg, projectSub, projectHead, projectText }) {
	return (
		<div className='bg-white p-4 mx-6 rounded-lg shadow-2xl font-roboto -mt-16'>
			<ProfileHeader />
			<div className='grid lg:grid-cols-3 md:grid-cols-2'>
				<ProfileBox />
				<ProfileInformation />
				<ProfileConv />
			</div>
			<ProfileProjectsHead />
			<div className='grid grid-cols-4'>
				<ProfileProjects
					projectImg={home1}
					projectSub='Project #1'
					projectHead='Modern'
					projectText='As Uber works through a huge amount of internal management turmoil.'
				/>
				<ProfileProjects
					projectImg={home2}
					projectSub='Project #2'
					projectHead='Scandinavian'
					projectText='Music is something that everyone has their own specific opinion about.'
				/>
				<ProfileProjects
					projectImg={home3}
					projectSub='Project #3'
					projectHead='Minimalist'
					projectText='Different people have different taste, and various types of music.'
				/>
				<ProfileProjects
					projectImg={home4}
					projectSub='Project #4'
					projectHead='Gothic'
					projectText='Why would anyone pick blue over pink? Pink is obviously a better color.'
				/>
			</div>
		</div>
	);
}
