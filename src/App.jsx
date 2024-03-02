import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './page/1. Dashboard/DashboardPage';
import TablePage from './page/2. Table/TablePage';
import BillingPage from './page/3. Billing/BillingPage';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<DashboardPage />} />
					<Route path='/tablepage' element={<TablePage />} />
					<Route path='/billingpage' element={<BillingPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
