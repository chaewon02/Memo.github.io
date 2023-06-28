import React, {Component} from 'react';
import './note-list.scss';
import Note from './note/note'

class NoteList extends Component{
    static defaultProps = {
        notes : []
    };
    render(){
        const notelistReturn = notes => {
            return notes.map((note,index) => {
               return (
                <Note 
                    key={index} 
                    noteNum={index} 
                    title={note.title} 
                    text={note.text} 
                    date={note.date} 
                    edited={note.edited}
                    changeNote={this.props.changeNote}
                    deleteNote={this.props.deleteNote}
                />
               );
            });
        };
        

        return(
            <div id="note-list-container">
                <div id="note-list">{notelistReturn(this.props.notes)}</div>
            </div>
        )
    }
}

export default NoteList;