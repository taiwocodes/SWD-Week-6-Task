import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notepad from '../components/notepad';
import '../style/notepad.css';

const NotesList = (props) => {

	// const {state} = useContextGetter();
	// const contextNotes = state.notes;
	const [notes, setNotes] = useState();

    const handleChange = (e) => {
		setNotes(e.target.value);
	};
    

	const deleteNote = (id) => {
		const remainingNotes = notes.filter((note) => id !== note.id);
		setTasks(remainingNotes);
	};

	const notesList = notes.map(note => (
		<NotesList
			id={note.id}
			name={note.name}
			key={note.id}
			deleteNote={deleteNote}
		/>
   )
  );

	const addNote = (name) => {
		const newNote = { id: 'todo-' + nanoid(), name: name, completed: false };
		set([...note, newNote]);
	};

	return (
		<>

     <div>

     <Notepad addNote={addNote} />

			<h2 id='list-heading'>your thoughts are here</h2>

      <ul>
  		{notesList}
          <button
					type='button'
					className='delete-btn'
					onClick={() => props.deleteNote(props.id)}
				>
					delete <span className='visually-hidden'>{props.name}</span>
				</button>
</ul>

</div>

		</>
	);
};

export default NotesList;
