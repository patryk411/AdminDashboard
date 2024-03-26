import React from 'react';
import SignBg from '../../components/SignUpComp/SignBg';
import Input from '../../components/UI/Input';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/UI/Checkbox';

export default function SignUp() {
	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const acquistitionChannel = fd.getAll('acquistition');
		const data = Object.fromEntries(fd.entries());
		data.acquistition = acquistitionChannel;

		fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				signUpFormData: {
					userData: data,
				},
			}),
		});
		console.log(data);
	}

	return (
		<div>
			<SignBg />
			<div className='absolute top-1/2 left-1/2 bg-white font-roboto rounded-lg -translate-y-1/2 -translate-x-1/2 shadow-2xl'>
				<div className='bg-blue rounded-lg mx-4 p-4 -mt-8 w-formW'>
					<h1 className='font-bold text-2xl mt-6 mb-4 text-white text-center'>Join us today</h1>
					<p className='font-light text-sm text-white my-2 text-center'>Enter your email and password to register</p>
				</div>

				<form onSubmit={handleSubmit} className='max-w-md mx-auto px-8 pt-8 pb-6'>
					<Input
						label='Name'
						htmlFor='floating_name'
						placeholder=' '
						type='name'
						name='name'
						id='floating_name'
						required
					/>
					<Input
						label='Email'
						htmlFor='floating_email_2'
						placeholder=' '
						type='email'
						name='email'
						id='floating_email_2'
						required
					/>
					<Input
						label='Password'
						htmlFor='floating_passw_2'
						placeholder=' '
						type='password'
						name='password'
						id='floating_passw_2'
						minLength={8}
						required
					/>

					<Checkbox />
					<button className='flex flex-col justify-center items-center w-full px-6 py-2.5 text-white font-bold uppercase bg-blue text-xs rounded-lg mt-6 mb-8'>
						sign in
					</button>
					<p className='flex flex-row justify-center font-normal text-sm text-iconsBg'>
						Already have an account?
						<Link className='font-bold text-blue ml-1.5' to='/sign-in'>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
