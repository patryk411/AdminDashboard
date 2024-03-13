import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SignNav() {
	const location = useLocation();

	return (
		<div
			className={`flex flex-row justify-between items-center absolute top-0 ${
				location.pathname === '/sign-up' ? 'bg-transparent px-12 w-3/4' : 'bg-signNav w-11/12'
			} m-6 px-4 py-2 rounded-lg z-10`}>
			<p className={`font-bold text-sm ${location.pathname === '/sign-up' ? 'text-white' : 'text-title'}`}>
				Material Dashboard
			</p>
			<div className='flex flex-row'>
				<Link
					className={`flex flex-row items-center p-2 mx-2 text-title text-sm ${
						location.pathname === '/sign-up' ? 'text-white' : ''
					}`}
					to='/'>
					<span
						className={`material-icons text-xl text-iconsBg mr-2 ${
							location.pathname === '/sign-up' ? 'text-white' : ''
						}`}>
						donut_large
					</span>
					Dashboard
				</Link>
				<Link
					className={`flex flex-row items-center p-2 mx-2 text-title text-sm ${
						location.pathname === '/sign-up' ? 'text-white' : ''
					}`}
					to='/profile'>
					<span
						className={`material-icons text-xl text-iconsBg mr-2 ${
							location.pathname === '/sign-up' ? 'text-white' : ''
						}`}>
						person
					</span>
					Profile
				</Link>
				<Link
					className={`flex flex-row items-center p-2 mx-2 text-title text-sm ${
						location.pathname === '/sign-up' ? 'text-white' : ''
					}`}
					to='/sign-up'>
					<span
						className={`material-icons text-xl text-iconsBg mr-2 ${
							location.pathname === '/sign-up' ? 'text-white' : ''
						}`}>
						account_circle
					</span>
					Sign Up
				</Link>
				<Link
					className={`flex flex-row items-center p-2 mx-2 text-title text-sm ${
						location.pathname === '/sign-up' ? 'text-white' : ''
					}`}
					to='/sign-in'>
					<span
						className={`material-icons text-xl text-iconsBg mr-2 ${
							location.pathname === '/sign-up' ? 'text-white' : ''
						}`}>
						key
					</span>
					Sign In
				</Link>
			</div>
			<button
				className={`px-4 py-1.5 font-bold uppercase text-xs text-white rounded-lg ${
					location.pathname === '/sign-up' ? 'bg-blue' : 'bg-bgDark'
				}`}>
				free download
			</button>
		</div>
	);
}
