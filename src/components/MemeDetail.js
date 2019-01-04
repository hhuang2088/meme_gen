import React from 'react';

const MemeDetail = ({meme}) => {
	if (!meme) {
		return <div>Loading...</div>;
	}
	return(
		<div className="ui segment">
			<img className="ui centered image centered large" src={meme.imageUrl} alt={meme.urlName}/>
		</div>
	);
}

export default MemeDetail;
