import React, { useState } from 'react';
import '../styles/notepad.css';

const Notepad = (props) => {

	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	// const handleSubmit =(e) => {
	// 	//to send the task back to the app component
	// 	e.preventDefault();
	// 	props.addTask(notes);
	// 	setNotes('');
	// }

	return (
		<>
			<div>
				<nav className='nav-bar'>
					<a className='logout-link' href='/login'>
						logout
					</a>
				</nav>
			</div>

            <h2>what do you need to remember?</h2>

			<div>
                <form>
				<textarea className='content-body'
                placeholder='unload here...' 
                 value={input}
                 onChange={handleChange} />

                <button type='submit'>save</button>
                </form>
			</div>


		</>
	);
};

export default Notepad;
