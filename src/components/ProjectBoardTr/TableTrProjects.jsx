import React from 'react';

export default function TableTrProjects({ projectImg, projectName, projectBudget, projectStatus, projectCmplt }) {
	return (
		<div className='grid grid-cols-10 py-3 border-border border-t-2'>
			<div className='col-span-3 flex flex-row items-center'>
				<div className='w-9 h-9 mr-2'>
					<img className='rounded-full' src={projectImg} alt='' />
				</div>
				<p className='text-sm text-title font-bold'>{projectName}</p>
			</div>
			<div className='col-span-2 flex flex-col justify-center sm:items-center'>
				<p className='text-xs text-iconsBg font-bold'>{projectBudget}</p>
			</div>
			<div className='col-span-2 flex flex-col justify-center sm:items-center'>
				<div className='flex flex-col justify-center'>
					<p className='text-xs px-1 py-2 text-iconsBg font-bold'>{projectStatus}</p>
				</div>
			</div>
			<div className='col-span-2 flex flex-col w-44 sm:w-auto justify-center'>
				<div className='bg-boxShadow rounded-xl shadow-sm overflow-hidden'>
					<div className='relative h-1.5 flex items-center justify-center'>
						<div
							className={`absolute top-0 bottom-0 left-0 rounded-lg bg-blue ${
								projectStatus === 'working'
									? 'fbg-blue'
									: projectStatus === 'done'
									? 'bg-green'
									: projectStatus === 'canceled'
									? 'bg-red'
									: ''
							}`}
							style={{ width: projectCmplt + '%' }}></div>
					</div>
				</div>
			</div>
			<a href='' className='col-span-1 flex flex-col justify-center items-center'>
				<p className='text-xs text-iconsBg font-bold'>
					<span className='material-icons'>more_vert</span>
				</p>
			</a>
		</div>
	);
}
