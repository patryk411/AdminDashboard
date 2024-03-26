import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import BillingInfoBox from './BillingComp/BillingInfoBox';
import ModalBilling from './UI/ModalBilling';

export default function BillingInformation({ onUpdate }) {
	const [tableData, setTableData] = useState([
		{ name: 'Oliver Liam', companyName: 'Viking Burrito', email: 'oliver@burrito.com', vat: 'FRB1235476' },
		{ name: 'Lucas Harper', companyName: 'Stone Tech Zone', email: 'lucas@stone-tech.com', vat: 'FRB1235476' },
		{ name: 'Ethan James', companyName: 'Fiber Notion', email: 'ethan@fiber.com', vat: 'FRB1235476' },
	]);
	const [isBoxRemoved, setIsBoxRemoved] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newBillingData, setNewBillingData] = useState(null);

	const handleTableRowUpdate = (index, newData) => {
		const updatedTableData = [...tableData];
		updatedTableData[index] = newData;
		setTableData(updatedTableData);
	};

	const handleUpdateData = () => {
		onUpdate([...tableData, newBillingData]);
		setIsModalOpen(false);
		setNewBillingData(null);
	};

	const handleRemoveBillingInfoBox = index => {
		const removedItem = tableData[index];
		const updatedTableData = [...tableData];
		updatedTableData.splice(index, 1);
		setTableData(updatedTableData);
		setIsBoxRemoved(true);
		setNewBillingData(removedItem);
	};

	const handleAddNewBillingInfo = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleChange = (name, value) => {
		setNewBillingData({ ...newBillingData, [name]: value });
	};

	return (
		<div className='md:col-span-4 sm:col-span-8 font-roboto rounded-lg shadow-2xl bg-white mt-6 p-6'>
			<h3 className='text-md text-title font-bold'>Billing Information</h3>
			{tableData.map((rowData, index) => (
				<BillingInfoBox
					key={index}
					index={index}
					name={rowData.name}
					companyName={rowData.companyName}
					email={rowData.email}
					vat={rowData.vat}
					onUpdate={newData => handleTableRowUpdate(index, newData)}
					onRemove={() => handleRemoveBillingInfoBox(index)}
				/>
			))}

			{isBoxRemoved && (
				<button
					onClick={handleAddNewBillingInfo}
					className='bg-bgWhite w-full py-4 mt-4 flex flex-row items-center justify-center'>
					<span className='material-icons mr-3'>add_circle</span>
					ADD
				</button>
			)}

			{isModalOpen &&
				createPortal(
					<ModalBilling
						companyName={newBillingData?.companyName || ''}
						email={newBillingData?.email || ''}
						vat={newBillingData?.vat || ''}
						name={newBillingData?.name || ''}
						updatedData={() => {}}
						onChange={handleChange}
						onUpdate={handleUpdateData}
						onClose={handleCloseModal}
						modalOpen={isModalOpen}
					/>,
					document.body
				)}
		</div>
	);
}
