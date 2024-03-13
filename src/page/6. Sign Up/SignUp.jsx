import React from 'react';
import SignBg from '../../components/SignUpComp/SignBg';
import Input from '../../components/UI/Input';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/UI/Checkbox';

export default function SignUp() {
	return (
		<div>
			<SignBg />
			<div className='absolute top-1/2 left-1/2 bg-white font-roboto rounded-lg -translate-y-1/2 -translate-x-1/2 shadow-2xl'>
				<div className='bg-blue rounded-lg mx-4 p-4 -mt-8 w-formW'>
					<h1 className='font-bold text-2xl mt-6 mb-4 text-white text-center'>Join us today</h1>
					<p className='font-light text-sm text-white my-2 text-center'>Enter your email and password to register</p>
				</div>

				<form className='max-w-md mx-auto px-8 pt-8 pb-6'>
					<Input
						label='Name'
						htmlFor='floating_name'
						placeholder=' '
						type='name'
						name='floating_name'
						id='floating_name'
					/>
					<Input
						label='Email'
						htmlFor='floating_email'
						placeholder=' '
						type='email'
						name='floating_email'
						id='floating_email'
					/>
					<Input
						label='Password'
						htmlFor='floating_passw'
						placeholder=' '
						type='password'
						name='floating_passw'
						id='floating_passw'
					/>

					<Checkbox />
					<button
						type='submit'
						className='flex flex-col justify-center items-center w-full px-6 py-2.5 text-white font-bold uppercase bg-blue text-xs rounded-lg mt-6 mb-8'>
						sign in
					</button>
					<p className='flex flex-row justify-center font-normal text-sm text-iconsBg'>
						Already have an account?{' '}
						<Link className='font-bold text-blue ml-1.5' to='/sign-in'>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
