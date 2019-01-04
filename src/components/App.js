import React from 'react';
import SearchBar from './SearchBar';
import MemeList from './MemeList';
import MemeDetail from './MemeDetail';
import memeGenerator from '../apis/memeGenerator';

const KEY = '9e60a159-e055-41c2-a333-216a402f68cd';

class App extends React.Component {
	state = {
		selectedMeme: null,
		memes: []
	};

	onFormSubmit = async (term) => {
		const response = await memeGenerator.get('/Generators_Search', {
				params: {
					q: term,
					apiKey: KEY
				}
			}
		);
		this.setState({memes: response.data.result})
	}

	onMemeSelect = (meme) => {
		this.setState({selectedMeme: meme});
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onFormSubmit}/>
				<div className="ui grid">
					<div className="row">
						<MemeDetail meme={this.state.selectedMeme} />
					</div>
					<div className="sixteen wide column">
						<MemeList memes={this.state.memes} onMemeSelect={this.onMemeSelect}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
