import React from 'react';
import SignInView from '../../components/SignInComp/SignInView';
import SignInForm from '../../components/SignInComp/SignInForm';
import SignNav from '../../components/SignInComp/SignNav';

export default function SignIn() {
	return (
		<div className='font-roboto'>
			<div className='flex flex-col items-center'>
				<SignNav />
			</div>
			<SignInView />
			<SignInForm />
		</div>
	);
}
