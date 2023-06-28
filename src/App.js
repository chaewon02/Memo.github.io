import React, {Component} from 'react';
import styled from 'styled-components';
import NoteList from './component/note-list/note-list'
import ModalPage from './component/modal/modal';
import NoteRaw from './component/note-raw/note-raw';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppDiv = styled.div`
  width: 50vw;
  height: 50vh;
  border-rasius:0.25rem;
  padding: 1rem;
  background-color: rgb(247, 202, 106);
  // background: url('note2.jpg');
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

class App extends Component {
  state = {
    search: '',
    notes: [
      
    ],
    modalToogle : false
  };

  toogleModal = () => {
    this.setState({
      modalToogle: !this.state.modalToogle
      // 버튼 누를 때마다 false/true 반전!
    });
  };
  createNote = (title,text) =>{
    this.setState({
      notes : [...this.state.notes, {title, text, date: new Date(), edited: false}]
    });
  };
  changeNote = (title,text,number) =>{
    this.setState({
      notes : this.state.notes.map((note,index)=>(index===number ? {...note,title,text,edited:true} : note))
    });
  };
  deleteNote = number =>{
    this.setState({
      notes : this.state.notes.filter((note,index)=>(index===number ? false : true))
    });
  };
  
  
  render(){
    return(
      <Container>
        {this.state.modalToogle && (
        <ModalPage>
           <NoteRaw action={this.createNote} close={this.toogleModal} />
        </ModalPage>
        )}
        {/* modalToogle이 true일 때 modalpage 실행 */}
        <AppDiv>
          <SearchBar>
            <div>
              <span>chaewon의 메모장</span>
            </div>
            <div>
              <button onClick={this.toogleModal}>새 메모 작성</button>
              <div id="search-bar" />
            </div>
            </SearchBar>
          <NoteList 
            notes = {this.state.notes}
            changeNote={this.changeNote} 
            deleteNote={this.deleteNote} 
            />
        </AppDiv>
      </Container>
    )
  }
}
export default App;
