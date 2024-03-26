import React, { useState } from 'react';
import Modal from '../UI/Modal';

export default function TableTr({ img, userName, userMail, userFn, userFn2, userStatus, userEmployed, onUpdate }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [rowData, setRowData] = useState({
		userName,
		userMail,
		userFn,
		userFn2,
		userStatus,
		userEmployed,
	});
	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleUpdateRow = () => {
		onUpdate({ ...rowData, img });
		setModalOpen(false);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setRowData({ ...rowData, [name]: value });
	};

	return (
		<div className='grid grid-cols-7 py-3 border-border border-t-2 relative'>
			<div className='col-span-3 flex flex-row items-center'>
				<div className='h-9 w-9 mr-3'>
					<img className='rounded-full' src={img} alt='' />
				</div>
				<div className='row'>
					<p className='text-sm text-title font-bold'>{userName}</p>
					<p className='text-xs text-title font-light'>{userMail}</p>
				</div>
			</div>
			<div className='col-span-1 flex flex-col justify-center'>
				<p className='text-xs text-iconsBg font-bold'>{userFn}</p>
				<p className='text-xs text-title font-light'>{userFn2}</p>
			</div>
			<div className='col-span-1 flex flex-col justify-center'>
				<div
					className={`rounded-md w-12 h-5 flex flex-col items-center justify-center ${
						userStatus !== 'Online' ? 'bg-bgDark' : 'bg-green'
					}`}>
					<p className='text-small px-1 py-2 text-white font-bold uppercase'>{userStatus}</p>
				</div>
			</div>
			<div className='col-span-1 flex flex-col justify-center'>
				<p className='text-xs text-iconsBg font-bold'>{userEmployed}</p>
			</div>
			<div className='col-span-1 flex flex-col justify-center sm:items-center'>
				<button onClick={handleOpenModal} className='text-xs text-iconsBg font-bold'>
					Edit
				</button>
			</div>
			{modalOpen && (
				<Modal
					img={img}
					userName={userName}
					userMail={userMail}
					userFn={userFn}
					userFn2={userFn2}
					userStatus={userStatus}
					userEmployed={userEmployed}
					rowData={rowData}
					onChange={handleChange}
					onUpdate={handleUpdateRow}
					onClose={handleCloseModal}
					modalOpen={modalOpen}
				/>
			)}
		</div>
	);
}
