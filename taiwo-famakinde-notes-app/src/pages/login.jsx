import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/index.css';


const Login = (props) => {
	//initialize email and password states
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	//to update the values
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	// const handleSubmitClick = (e) => {
	//     e.preventDefault();
	// }

	history.push('/login');

	return (
		<>
			<div className='form-group'>
				<h2>...to collect your thoughts, login</h2>
				<form action=''>
					<div className='input-form'>
                        <div>
						<label htmlFor='exampleInputEmail'>email address</label>
                        </div>
						<input
							type='email'
							className='form-control'
							id='email'
							placeholder='enter your email address'
							value={state.email}
							onChange={handleChange}
						/>
					</div>

					<div className='input-form'>
                        <div>
						<label htmlFor='exampleInputPassword1'>password</label>
                        </div>
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='enter your password'
							value={state.password}
							onChange={handleChange}
						/>
					</div>

					<button type='submit' className='reg-btn'>
						<a className='login-link' href='/notepad'>
							login
						</a>
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
