
import React from 'react';
import style from '../../styles/main.scss';

import MarkdownDisplay from './MarkdownDisplay';

// import InputTextArea from './InputTextArea';

class MainContainer extends React.Component {
	
	constructor(props) {
			super(props);
			this.state = {previewText: `Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n\`monospace\`, and ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n*[Check Out My Other Projects!](https://github.com/qwertwerty21)*\n\n`};
			this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
			console.log('asdfs', e.target.value)
			this.setState({
					previewText: e.target.value
			});
	}

	render() {
			return (
					<div className="main-container">
							<h2 className="main-title">Markdown Previewer</h2>
							<div className="title-row">
								<h4>Edit The Text Here...</h4>
								<h4>...And See What Comes Out!</h4>
							</div>
							<div className="text-area-container">
								<textarea value={this.state.previewText} className="input-text-area" onChange={ this.handleChange }></textarea>
							</div>
							
							<MarkdownDisplay previewText={this.state.previewText}/>
					</div>
			);
	}

	
}

export default MainContainer;