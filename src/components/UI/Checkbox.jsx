import React from 'react';

export default function Checkbox() {
	return (
		<div className='flex items-center my-8'>
			<input
				id='link-checkbox'
				type='checkbox'
				value=''
				className='w-4 h-4 text-blue-600 bg-gray-100 border-red rounded dark:ring-offset-red focus:ring-2 dark:bg-red dark:border-red'
			/>
			<label htmlFor='link-checkbox' className='ms-2 text-sm font-normal text-gray-900 dark:text-iconsBg'>
				I agree with the
				<a href='#' className='text-blue-600 dark:text-blue hover:underline font-bold ml-1'>
					Terms and Conditions
				</a>
			</label>
		</div>
	);
}
