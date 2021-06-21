import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Register from './pages/register';
import Login from './pages/login';
import Notepad from './pages/notepad';
import StateProvider from './components/stateprovider';

//use the router, switch & browse...; import & render



const App = () => {
	return (
		<StateProvider>
			<Router>

				<Switch>

          {/* this is to render the pages when we hit the embedded link  */}

					<Route exact path='/register'>
						<Register />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/notepad'>
						<Notepad />
					</Route>

					<Route exact path='/'>
						<Register />
					</Route>

				</Switch>

			</Router>
		 </StateProvider>
	);
};

export default App;
