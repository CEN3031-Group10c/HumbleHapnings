import React from 'react';
import "./Tags.css"

const SPACE_KEY = 32;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;


//https://codepen.io/zebapy/pen/mJVrwg
class Tags extends React.Component {
    tags = this.props.tags
    constructor(props) {
        super(props);
        this.state = { 
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleKeyUp(event) {
        const key = event.keyCode;

        if (key === SPACE_KEY || key === COMMA_KEY) {
            this.addTag();
        }
    }

    handleKeyDown(event) {
        const key = event.keyCode;
        if (key === BACKSPACE_KEY && !this.state.value) {
            this.editPrevTag();
        }
    }

    addTag() {
        const {value } = this.state;
        let newTag = value.trim();

        newTag = newTag.replace(/,/g, "");

        if (!newTag) {
            return;
        }

        this.setState({
            value: ""
        });
        this.props.addTag(newTag);
    }

    editPrevTag() {

        const tag = this.props.popTag();

        this.setState({ value: tag });

    }

    render() {
        const {value } = this.state;
        return (
        <div className="form">
            <div className="tags-tags">
            <ul>
                {this.props.tags.map((tag, i) => (
                <li key={tag + i} className="tag-tag">
                    {tag}
                </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add tag..."
                value={value}
                onChange={this.handleChange}
                ref="tag"
                className="tag-input"
                onKeyUp={this.handleKeyUp}
                onKeyDown={this.handleKeyDown}
            />
            </div>
            <small className="tags">
            Press <code className="tags">space</code> or <code className="tags">,</code> to add a tag. Press{" "}
            <code className="tags">backspace</code> to edit previous tag.
            </small>
        </div>
        );
    }
}


export default Tags;