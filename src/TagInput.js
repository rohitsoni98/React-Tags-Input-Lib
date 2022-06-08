import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const NAME = [
	"Rohit",
	"Rohan",
	"Vansh",
	"Aman",
	"Rahul"
];

const suggestions = NAME.map(name => {
	return {
		id: name,
		text: name
	};
});

const TagInput = () => {

	const [tags, setTags] = useState([
		{ id: 'Rohit', text: 'Rohit' },
		{ id: 'Vansh', text: 'Vansh' },
	]);

	const handleDelete = i => {
		setTags(tags.filter((tag, index) => index !== i));
	};

	const handleAddition = tag => {
		setTags([...tags, tag]);
	};

	const handleDrag = (tag, currPos, newPos) => {
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		setTags(newTags);
	};


	return (
		<div>
			<h1> React Tags Example </h1>
			<div>
				<ReactTags
					tags={tags}
					suggestions={suggestions}
					handleDelete={handleDelete}
					handleAddition={handleAddition}
					handleDrag={handleDrag}
					inputFieldPosition="bottom"
					autocomplete
				/>
			</div>
		</div>
	)
}

export default TagInput;