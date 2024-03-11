// Dashboard.jsx
import React, { useState } from 'react';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

export default function Dashboard({ currentPage }) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div className='my-6 ml-6'>
			<div className='flex flex-row justify-between py-1 px-4'>
				<div>
					<div className='flex flex-row items-end'>
						<a href='' className='text-title text-base'>
							<i className='fa-solid fa-house'></i>
						</a>
						<span className='px-2'>/</span>
						<p className='text-title text-sm font-roboto'>{currentPage}</p>
					</div>
					<h4 className='text-title text-base font-roboto font-bold'>{currentPage}</h4>
				</div>

				<div className='flex flex-row items-center'>
					<div className='flex flex-col justify-center border-input ring-transparent text-input text-sm pr-2'>
						<input
							type='text'
							name='price'
							id='price'
							className='w-full rounded-lg border-2 p-3 focus:outline-none font-roboto'
							placeholder='Search here'
						/>
					</div>
					<div className='flex flex-row items-center'>
						<a href='' className='mx-2'>
							<div className='flex flex-col items-center justify-center bg-iconsBg rounded-full w-5 h-5'>
								<i className='fa-solid fa-user text-xs text-white'></i>
							</div>
						</a>
						<button onClick={handleToggleNav} className='mx-2 lg:hidden sm:block'>
							<span className='material-icons text-xl text-iconsBg font-bold'>{isNavOpen ? 'close' : 'menu'}</span>
						</button>
						<a href='' className='mx-2'>
							<i className='fa-solid fa-gear text-xl text-iconsBg'></i>
						</a>
						<a href='' className='mx-2'>
							<i className='fa-solid fa-bell text-xl text-iconsBg'></i>
						</a>
					</div>
				</div>
			</div>
			{isNavOpen && <NavigationMobile />}
		</div>
	);
}
