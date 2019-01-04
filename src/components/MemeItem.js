import './MemeItem.css';
import React from 'react';

const MemeItem = ( {meme, onMemeSelect} ) => {
	return (
		<div className="meme-item item" onClick={() => onMemeSelect(meme)}>
			<img className="ui images" src={meme.imageUrl} alt={meme.urlName} />
			<div className="content">
				<div className="header">{meme.displayName}</div>
			</div>
		</div>
	)
}

export default MemeItem;
