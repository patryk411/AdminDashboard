import React from 'react';
import per1 from '../assets/per1.jpg';
import per2 from '../assets/per2.jpg';
import per3 from '../assets/per3.jpg';
import per4 from '../assets/per4.jpg';
import TableTr from './ProjectBoardTr/TableTr';
import TablesBar from './TablesComp/TablesBar';
import TableHeading from './TablesComp/TableHeading';

export default function Table({ barTitle, tabTitle1, tabTitle2, tabTitle3, tabTitle4, tabTitle5 }) {
	return (
		<div className='mx-12 mt-12 font-roboto bg-white shadow-lg shadow-boxShadow rounded-xl px-4 pb-6'>
			<TablesBar barTitle={barTitle} />
			<div className='mt-6'>
				<TableHeading
					tabTitle1={tabTitle1}
					tabTitle2={tabTitle2}
					tabTitle3={tabTitle3}
					tabTitle4={tabTitle4}
					tabTitle5={tabTitle5}
				/>
				<TableTr
					img={per2}
					userName='John Michael'
					userMail='john@creative-tim.com'
					userFn='Manager'
					userFn2='Organization'
					userStatus='Online'
					userEmployed='23/04/18'
				/>
				<TableTr
					img={per3}
					userName='Alexa Liras'
					userMail='alexa@creative-tim.com'
					userFn='Programator'
					userFn2='Developer'
					userStatus='Offline'
					userEmployed='11/01/19'
				/>
				<TableTr
					img={per1}
					userName='Laurent Perrier'
					userMail='laurent@creative-tim.com'
					userFn='Executive'
					userFn2='Projects'
					userStatus='Online'
					userEmployed='19/09/17'
				/>
				<TableTr
					img={per4}
					userName='Michael Levi'
					userMail='michael@creative-tim.com'
					userFn='Programator'
					userFn2='Developer'
					userStatus='Online'
					userEmployed='24/12/08'
				/>
				<TableTr
					img={per4}
					userName='Richard Gran'
					userMail='richard@creative-tim.com'
					userFn='Manager'
					userFn2='Executive'
					userStatus='Offline'
					userEmployed='04/10/21'
				/>
				<TableTr
					img={per1}
					userName='Miriam Eric'
					userMail='miriam@creative-tim.com'
					userFn='Programator'
					userFn2='Developer'
					userStatus='Offline'
					userEmployed='14/09/20'
				/>
			</div>
		</div>
	);
}
