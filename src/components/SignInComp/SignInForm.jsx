import React from 'react';
import Input from '../UI/Input';
import SwitchToggle from '../UI/SwitchToggle';
import { Link } from 'react-router-dom';

export default function SignInForm({ label }) {
	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const acquistitionChannel = fd.getAll('acquistition');
		const data = Object.fromEntries(fd.entries());
		data.acquistition = acquistitionChannel;

		fetch('http://localhost:3000/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				signInFormData: {
					userData: data,
				},
			}),
		});
		console.log(data);
	}

	return (
		<div className='absolute top-1/2 left-1/2 bg-white font-roboto rounded-lg -translate-y-1/2 -translate-x-1/2'>
			<div className='bg-blue rounded-lg mx-4 p-4 -mt-8 w-formW'>
				<h1 className='font-bold text-2xl mt-6 mb-4 text-white text-center'>Sign in</h1>
				<div className='flex flex-row items-center justify-center'>
					<a href='' className='p-6'>
						<i className='fa-brands fa-square-facebook w-5 h-5 text-white'></i>
					</a>
					<a href='' className='p-6'>
						<i className='fa-brands fa-github w-5 h-5 text-white'></i>
					</a>
					<a href='' className='p-6'>
						<i className='fa-brands fa-google w-5 h-5 text-white'></i>
					</a>
				</div>
			</div>

			<form onSubmit={handleSubmit} className='max-w-md mx-auto px-8 pt-8 pb-6'>
				<Input
					label='Email'
					htmlFor='floating_email'
					placeholder=' '
					type='email'
					name='email'
					id='floating_email'
					required
				/>
				<Input
					label='Password'
					htmlFor='floating_passw'
					placeholder=' '
					type='password'
					name='password'
					id='floating_passw'
					minLength={8}
					required
				/>
				<SwitchToggle label='Remember me' />
				<button className='flex flex-col justify-center items-center w-full px-6 py-2.5 text-white font-bold uppercase bg-blue text-xs rounded-lg mt-6 mb-8'>
					sign in
				</button>
				<p className='flex flex-row justify-center font-normal text-sm text-iconsBg'>
					Don't have an account?{' '}
					<Link className='font-bold text-blue ml-1.5' to='/sign-up'>
						Sign up
					</Link>
				</p>
			</form>
		</div>
	);
}
