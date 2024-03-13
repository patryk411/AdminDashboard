import React from 'react';

export default function ProfileInformation() {
	return (
		<div className='lg:col-span-1 md:col-span-1 md:mt-6 sm:mt-0 pl-2 pt-2 lg:border-x md:border-0 lg:border-separator'>
			<h3 className='font-bold text-title text-md p-4'>Profile Information</h3>
			<div className='px-4 py-2'>
				<p className='font-light text-sm text-iconsBg mb-8'>
					Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths,
					choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
				</p>
				<div>
					<p className='text-sm font-medium text-iconsBg py-2 pr-4'>
						<span className='font-bold text-title mr-3'>Full Name:</span>Alec M. Thompson
					</p>
					<p className='text-sm font-medium text-iconsBg py-2 pr-4'>
						<span className='font-bold text-title mr-3'>Mobile:</span> (44) 123 1234 123
					</p>
					<p className='text-sm font-medium text-iconsBg py-2 md:pr-4 sm:pr-0'>
						<span className='font-bold text-title mr-3'>Email:</span> alecthompson@mail.com
					</p>
					<p className='text-sm font-medium text-iconsBg py-2 pr-4'>
						<span className='font-bold text-title mr-3'>Location:</span>USA
					</p>
					<p className='text-md font-medium text-iconsBg py-2 pr-4'>
						<span className='text-sm font-bold text-title mr-3'>Social</span>
						<a href='' className='p-2'>
							<i className='fa-brands fa-square-facebook text-fb'></i>
						</a>
						<a href='' className='mx-2'>
							<i className='fa-brands fa-twitter text-x'></i>
						</a>
						<a href='' className='p-2'>
							<i className='fa-brands fa-instagram text-ig'></i>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
