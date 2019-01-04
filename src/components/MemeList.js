import React from 'react';
import MemeItem from './MemeItem';

const MemeList = ({ memes, onMemeSelect }) => {
	if (!memes) {
		return <div>Why not give that search bar a go...</div>;
	}
	const displayList = memes.map((meme) => {
		return (
				<MemeItem
					meme={meme}
					onMemeSelect={onMemeSelect}
					key={meme.imageID}
				/>
		);
	});
	return (
		<div className="ui horizontal list mini images">
			{displayList}
		</div>
	)
}

export default MemeList;
