import React, {Component} from "react";
import './note.scss';


class Note extends Component{
    static defaultProps ={
        title:'',
        text:'',
        date: new Date()
    };

    state = {
        showEitModal: false,
        showDeleteModal: false
    };

    changeEditToogle = () =>{
        this.setState({
            showChangeModal: !this.state.showChangeModal
        });
    };

    chageDeleteToogle = () => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal
        });
    };

    render = () => (
        <div id="note">
            <div id="note-menu">
                <span>{this.props.title}</span>
            </div>
            <div id="date">
                <span>
                    {this.props.date.toISOString()}
                    {this.props.edited && ' (edited)'}
                </span>
            </div>
            <div>{this.props.text}</div>
            {/* 여기 */}
        </div>


    );
 };

 export default Note;