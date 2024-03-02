import React from 'react';
import DailyInfoBox from './DailyInfo/DailyInfoBox';

export default function DailyInfo({ infoIcon, infoTitle, infoCount, infoPer, infoPerTitle }) {
	return (
		<div className='grid grid-cols-4 '>
			<DailyInfoBox
				infoIcon='weekend'
				infoTitle='Bookings'
				infoCount='281'
				infoPer='+55%'
				infoPerTitle='than lask week'
			/>
			<DailyInfoBox
				infoIcon='leaderboard'
				infoTitle='Today`s Users'
				infoCount='2,300'
				infoPer='+3%%'
				infoPerTitle='than lask month'
			/>
			<DailyInfoBox infoIcon='store' infoTitle='Revenue' infoCount='34k' infoPer='+1%' infoPerTitle='than yesterday' />
			<DailyInfoBox infoIcon='person_add' infoTitle='Followers' infoCount='+91' infoPerTitle='Just updated' />
		</div>
	);
}
