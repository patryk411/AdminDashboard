import React from 'react';
import navImg from '../assets/navImg.png';

const navigation = [
	{ name: 'Dashboard', href: '/', icon: 'dashboard', current: true },
	{ name: 'Tables', href: '/tablepage', icon: 'table_view', current: false },
	{ name: 'Billing', href: '/billingpage', icon: 'receipt_long', current: false },
	{ name: 'RTL', href: '/rtl', icon: 'format_textdirection_r_to_l', current: false },
	{ name: 'Notifications', href: '/notifications', icon: 'notifications', current: false },
	{ name: 'Profile', href: '/profile', icon: 'person', current: false },
	{ name: 'Sign In', href: '/sign-in', icon: 'login', current: false },
	{ name: 'Sign Up', href: '/sign-up', icon: 'assignment', current: false },
];

export default function Navigation() {
	return (
		<nav className='flex flex-col fixed justify-between min-h-screen bg-gradient-to-r from-slate-900 to-gray-600 rounded-xl m-6 p-6'>
			<div className=''>
				<div className='flex flex-row items-center justify-center pt-6 pb-2 px-8'>
					<img src={navImg} alt='' className='h-8 w-8 mr-1' />
					<h3 className='text-white text-sm font-roboto font-semibold capitalize'>Material Dashboard 2</h3>
				</div>
				<div className='my-4 bg-slate-100 h-px w-full'></div>
				<div className='flex flex-col'>
					{navigation.map((item, index) => (
						<a
							className='flex items-center justify-start mx-2 py-3 hover:bg-slate-300/25 rounded-md cursor-pointer duration-200'
							key={index}
							href={item.href}>
							<span className='material-icons text-white mr-3 px-2'>{item.icon}</span>
							<p
								className='font-roboto text-white text-sm font-bold'
								name={item.name}
								aria-current={item.current ? 'page' : undefined}>
								{item.name}
							</p>
						</a>
					))}
				</div>
			</div>
			<button className='font-roboto uppercase text-xs text-center font-bold rounded-md bg-sky-500 text-white px-6 py-3'>
				upgrade to pro
			</button>
		</nav>
	);
}
