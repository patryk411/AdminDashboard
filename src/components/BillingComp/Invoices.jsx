import React from 'react';

export default function Invoices() {
	return (
		<div className='lg:col-span-3 sm:col-span-8 row-span-2 font-roboto rounded-lg shadow-2xl lg:ml-6 md:ml-0 lg:mt-0 sm:mt-6'>
			<div className='p-4'>
				<div className='flex flex-row items-center justify-between'>
					<h3 className='font-bold text-md text-title'>Invoices</h3>
					<button className='flex flex-col items-center border-2 border-blue justify-center rounded-lg text-blue font-bold uppercase text-xs px-4 py-1.5'>
						view all
					</button>
				</div>
				<div className='mt-6'>
					<div className='flex flex-row justify-between items-center mb-5'>
						<div>
							<h5 className='font-bold text-title text-sm mb-3'>March, 01, 2020</h5>
							<p className='font-medium text-iconsBg text-xs'>#MS-415646</p>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<p className='font-normal text-sm text-iconsBg mr-4'>$180</p>
							<p className='flex flex-row justify-between items-center font-bold text-sm text-title'>
								<span class='material-icons text-xl mr-2'>picture_as_pdf</span>PDF
							</p>
						</div>
					</div>
					<div className='flex flex-row justify-between items-center mb-5'>
						<div>
							<h5 className='font-bold text-title text-sm mb-3'>February, 10, 2021</h5>
							<p className='font-medium text-iconsBg text-xs'>#RV-126749</p>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<p className='font-normal text-sm text-iconsBg mr-4'>$250</p>
							<p className='flex flex-row justify-between items-center font-bold text-sm text-title'>
								<span class='material-icons text-xl mr-2'>picture_as_pdf</span>PDF
							</p>
						</div>
					</div>
					<div className='flex flex-row justify-between items-center mb-5'>
						<div>
							<h5 className='font-bold text-title text-sm mb-3'>April, 05, 2020</h5>
							<p className='font-medium text-iconsBg text-xs'>#QW-103578</p>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<p className='font-normal text-sm text-iconsBg mr-4'>$120</p>
							<p className='flex flex-row justify-between items-center font-bold text-sm text-title'>
								<span class='material-icons text-xl mr-2'>picture_as_pdf</span>PDF
							</p>
						</div>
					</div>
					<div className='flex flex-row justify-between items-center mb-5'>
						<div>
							<h5 className='font-bold text-title text-sm mb-3'>June, 25, 2019</h5>
							<p className='font-medium text-iconsBg text-xs'>#MS-415646</p>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<p className='font-normal text-sm text-iconsBg mr-4'>$180</p>
							<p className='flex flex-row justify-between items-center font-bold text-sm text-title'>
								<span class='material-icons text-xl mr-2'>picture_as_pdf</span>PDF
							</p>
						</div>
					</div>
					<div className='flex flex-row justify-between items-center'>
						<div>
							<h5 className='font-bold text-title text-sm mb-3'>March, 01, 2019</h5>
							<p className='font-medium text-iconsBg text-xs'>#AR-803481</p>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<p className='font-normal text-sm text-iconsBg mr-4'>$300</p>
							<p className='flex flex-row justify-between items-center font-bold text-sm text-title'>
								<span class='material-icons text-xl mr-2'>picture_as_pdf</span>PDF
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
