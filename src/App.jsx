import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './page/1. Dashboard/DashboardPage';
import TablePage from './page/2. Table/TablePage';
import BillingPage from './page/3. Billing/BillingPage';
import Profile from './page/4. Profile/Profile';
import SignIn from './page/5. Sign In/SignIn';
import SignUp from './page/6. Sign Up/SignUp';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<DashboardPage />} />
					<Route path='/tablepage' element={<TablePage />} />
					<Route path='/billingpage' element={<BillingPage />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
