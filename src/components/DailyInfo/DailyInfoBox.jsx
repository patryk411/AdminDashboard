import React from 'react';

export default function DailyInfoBox({ infoIcon, infoTitle, infoCount, infoPer, infoPerTitle }) {
	return (
		<div
			className={`bg-white col-span-1 ml-6 mt-6 px-4 py-4 shadow-lg shadow-boxShadow rounded-xl ${
				infoIcon === 'person_add' ? 'mr-6' : ''
			}`}>
			<div className='grid grid-cols-2 relative'>
				<div
					className={`flex flex-col absolute bottom-8 items-center justify-center col-start-1 bg-blackBg w-16 h-16 rounded-xl ${
						infoIcon === 'leaderboard'
							? 'bg-blue'
							: infoIcon === 'store'
							? 'bg-green'
							: infoIcon === 'person_add'
							? 'bg-pink'
							: 'bg-blackBg'
					}`}>
					<span class='material-icons text-white'>{infoIcon}</span>
				</div>
				<div className='font-roboto col-end-4 flex flex-col items-end'>
					<h3 className='text-sm text-iconsBg font-light '>{infoTitle}</h3>
					<span className='text-title text-2xl font-bold'>{infoCount}</span>
				</div>
			</div>
			<div className='w-full h-px bg-boxShadow my-4'></div>
			<div className=''>
				<p className='font-roboto text-sm text-iconsBg'>
					<span className='font-bold text-green mr-1'>{infoPer}</span>
					{infoPerTitle}
				</p>
			</div>
		</div>
	);
}
