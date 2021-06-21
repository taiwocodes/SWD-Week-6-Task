import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/index.css';

const Register = (props) => {
	//initialize email, password and confirm password states
	const [state, setState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	// const newUser = {
	//     email: email,
	//     password: password,
	// };

	const history = useHistory();

	//to update the values
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handleSubmitClick = (e) => {
		e.preventDefault();
		if (state.password === state.confirmPassword) {
			alert('you have successfuly registered');
		}
	};

	// localStorage.setItem(email, JSON.stringify(newUser));

	history.push('/register');

	return (
		<>
			<div className='form-group'>
				<h2>to house your thoughts, register</h2>
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

					<div className='input-form'>
                        <div>
						<label htmlFor='exampleInputPassword1'>confirm your password</label>
                        </div>
						<input
							type='password'
							className='form-control'
							id='confirmPassword'
							placeholder='re-enter your password'
							value={state.confirmPassword}
							onChange={handleChange}
						/>
					</div>

                    <div>
                    <button type='submit' className='reg-btn' onClick={handleSubmitClick}>
						register
					</button>
                    </div>

						<a className='redirect-link' href='/login'>
							click here to continue
						</a>
					
						<a className='redirect-link' href='/login'>
							I already have an account
						</a>
					
				</form>
			</div>
		</>
	);
};

export default Register;
