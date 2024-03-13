import React from 'react';
import per1 from '../../assets/per1.jpg';
import per2 from '../../assets/per2.jpg';
import per3 from '../../assets/per3.jpg';
import per4 from '../../assets/per4.jpg';

import ProfileConvBox from './ProfileConvBox';

export default function ProfileConv({ img, name, text }) {
	return (
		<div className='lg:col-span-1 md:col-span-2 md:mt-6 sm:mt-0 pl-2 pt-2'>
			<h3 className='font-bold text-title text-md p-4'>Conversations</h3>
			<div className='px-4 py-2'>
				<ProfileConvBox img={per1} name='Sophie B.' text='Hi! I need more information..' />
				<ProfileConvBox img={per2} name='Anne Marie' text='Awesome work, can you..' />
				<ProfileConvBox img={per3} name='Ivanna' text='About files I can..' />
				<ProfileConvBox img={per4} name='Peterson' text='Have a great afternoon..' />
				<ProfileConvBox img={per2} name='Nick Daniel' text='Hi! I need more information..' />
			</div>
		</div>
	);
}
