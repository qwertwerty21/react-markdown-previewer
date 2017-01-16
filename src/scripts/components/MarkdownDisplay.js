import React from 'react';
const marked = require('marked');


class MarkdownDisplay extends React.Component{
	createMarkup(){
		var text = marked(this.props.previewText.toString(), {gfm: true, sanitize: true});
		return {
			__html: text
		}
	}

	render(){
		return (
			<div className="markdown-display-container">
				<p dangerouslySetInnerHTML={this.createMarkup()}></p>
			</div>
			
			);
	}
}

export default MarkdownDisplay;