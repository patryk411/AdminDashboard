import React from 'react';
import Input from './Input';

export default function ModalBilling({ name, companyName, vat, email, onClose, onUpdate, onChange }) {
	return (
		<div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 font-roboto -translate-y-1/2 -translate-x-1/2 z-10 bg-blackBgShadow2 w-full h-full'>
			<div className='grid grid-cols-10 p-6 border-border border-t-2 bg-white rounded-lg absolute top-1/3 left-1/2 -translate-x-1/3'>
				<div className='col-span-3 mr-2'>
					<Input
						label={name}
						htmlFor='person_Name'
						placeholder=' '
						type='text'
						name='name'
						id='person_Name'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-3 mr-2'>
					<Input
						label={companyName}
						htmlFor='company_Name'
						placeholder=' '
						type='text'
						name='companyName'
						id='company_Name'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-3 px-2'>
					<Input
						label={email}
						htmlFor='company_Email'
						placeholder=' '
						type='email'
						name='email'
						id='company_Email'
						onChange={onChange}
					/>
				</div>
				<div className='col-span-2 px-2'>
					<Input
						label={vat}
						htmlFor='company_vat'
						placeholder=' '
						type='text'
						name='vat'
						id='company_vat'
						onChange={onChange}
					/>
				</div>
				<button onClick={onClose} className='p-4 absolute -top-7 -right-5 z-20'>
					<i className='fa-solid fa-x'></i>
				</button>
				<div className='col-span-10 flex flex-row items-center justify-between'>
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
