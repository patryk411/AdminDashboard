import React, { useState } from 'react';
import Input from './Input';

export default function Modal({
	userName,
	userMail,
	userFn,
	userFn2,
	userStatus,
	userEmployed,
	onChange,
	onUpdate,
	onClose,
}) {
	return (
		<div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 font-roboto -translate-y-1/2 -translate-x-1/2 z-10 bg-blackBgShadow2 w-full h-full'>
			<div className='grid grid-cols-12 p-6 border-border border-t-2 bg-white rounded-lg absolute top-1/3 left-1/2 -translate-x-1/3'>
				<div className='col-span-2 mr-2'>
					<Input
						label={userName}
						htmlFor='organization_Name'
						placeholder=' '
						type='text'
						name='userName'
						id='organization_Name'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-3 px-2'>
					<Input
						label={userMail}
						htmlFor='organization_Email'
						placeholder=' '
						type='email'
						name='userMail'
						id='organization_Email'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-2 px-2'>
					<Input
						label={userFn}
						htmlFor='organization_Function'
						placeholder=' '
						type='text'
						name='userFn'
						id='organization_Function'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-2 px-2'>
					<Input
						label={userFn2}
						htmlFor='organization_department'
						placeholder=' '
						type='text'
						name='userFn2'
						id='organization_department'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-2 px-2'>
					<Input
						label={userStatus}
						htmlFor='organization_status'
						placeholder=' '
						type='text'
						name='userStatus'
						id='organization_status'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-2 px-2'>
					<Input
						label={userEmployed}
						htmlFor='organization_dateEmployed'
						placeholder=' '
						type='date'
						name='userEmployed'
						id='organization_dateEmployed'
						onChange={onChange}
					/>
				</div>
				<button onClick={onClose} className='p-4 absolute -top-7 -right-5 z-20'>
					<i className='fa-solid fa-x'></i>
				</button>
				<div className='col-span-12 flex flex-row items-center justify-between'>
					<button onClick={onUpdate} className='bg-blue text-md font-normal text-white rounded-lg px-6 py-2'>
						Save
					</button>
					<button onClick={onClose} className='bg-blue text-md font-normal text-white rounded-lg px-6 py-2'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
