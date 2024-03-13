import React from 'react';
import per1 from '../../assets/per1.jpg';
import per2 from '../../assets/per2.jpg';
import per3 from '../../assets/per3.jpg';
import per4 from '../../assets/per4.jpg';
import home1 from '../../assets/home1.jpg';

export default function ProfileProjects({ projectImg, projectSub, projectHead, projectText }) {
	return (
		<div className='lg:col-span-1 md:col-span-2 sm:col-span-4 p-4 sm:mb-4'>
			<div className='flex md:flex-row sm:flex-col justify-between items-center'>
				<div>
					<img className='rounded-lg shadow-2xl mb-4' src={projectImg} alt='' />
					<h3 className='text-sm text-iconsBg mb-2'>{projectSub}</h3>
					<h4 className='text-xl font-bold text-title mb-3'>{projectHead}</h4>
					<p className='font-light text-iconsBg text-sm'>{projectText} </p>
					<div className='flex flex-row items-center relative justify-between mt-6'>
						<button className='font-bold uppercase text-blue border border-blue px-4 py-1.5 text-xs rounded-lg'>
							view project
						</button>
						<div className='flex flex-row items-center justify-center'>
							<span className='absolute right-2 bottom-2'>
								<img className='w-5 h-5 rounded-full' src={per1} alt='' />
							</span>
							<span className='absolute right-6 bottom-2'>
								<img className='w-5 h-5 rounded-full' src={per2} alt='' />
							</span>
							<span className='absolute right-10 bottom-2'>
								<img className='w-5 h-5 rounded-full' src={per3} alt='' />
							</span>
							<span className='absolute right-14 bottom-2'>
								<img className='w-5 h-5 rounded-full' src={per4} alt='' />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
