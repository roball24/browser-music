import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PlaylistThunks } from '../actions';

const Item = styled.div`
	border: 0;
	display: block;
    background-color: ${props => props.theme.Background1};
    width: 100%;
    height: 70px;
    margin: 3px 0px;
    vertical-align: middle;
    position: relative;
	cursor: ${props => props.clicked ? 'text' : 'pointer'};
    
    &:hover {
        filter: brightness(150%);
    }
`

const ItemContent = styled.div`
	text-align: center;
	margin-left: -10px;
    position: relative;
    font-size: 20px;
    top: 22px;
`

const TextField = styled.input`
	color: ${props => props.theme.Background1};
    background-color: ${props => props.theme.Secondary3};
    border: solid 2px ${props => props.theme.Primary1};
    font-size: 20px;
    text-align: center;
    padding: 5px;
    margin: 3px 7px;
    height: 90%;
    width: 95%;
`

const AddInfo = styled.p`
	text-align: center;
`

class AddPlaylistItem extends React.Component {

	constructor() {
		super();
		this.state = { 
			adding: false,
			textValue: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.doneAdding = this.doneAdding.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	doneAdding(){
		this.setState({ adding: false });
	}

	handleClick(){
		this.setState(prevState => ({
			adding: !prevState.adding
		}), ()=> {
			if (this.state.adding){
				ReactDOM.findDOMNode(this.refs.textField).focus()
			}
		})
	}

	handleKeyPress(e){
		if (e.key == 'Enter'){
			if (this.state.textValue == '') return;
			this.props.dispatch(PlaylistThunks.add(this.state.textValue));
			this.setState({ textValue: '' });
			this.doneAdding();
		}

		if (e.key == 'Escape' || e.key == 'Esc') {
			this.doneAdding();
		}
	}

	handleTextChange(e){
		this.setState({ textValue: e.target.value });
	}

	render () {
		return (
			<Item 
				tabIndex="1" 
				onClick={this.handleClick} 
				onKeyDown={e=>{this.handleKeyPress(e)}} 
			>
				{ this.state.adding ? (
				<TextField 
					ref="textField"
					type="text" 
					value={this.state.textValue}
					onBlur={this.doneAdding}
					onClick={e=>{e.stopPropagation()}}
					onChange={e=>{this.handleTextChange(e)}}
				/>
				) : (
				<ItemContent>Add Playlist</ItemContent>
				)}

				{this.state.adding &&
				<AddInfo>Enter to Add, Esc to exit</AddInfo>
				}
			</Item>
		);
	}
}

function select(state){
	return {
		addPlaylistState: state.addPlaylistState
	}
}

export default connect(select)(AddPlaylistItem);
