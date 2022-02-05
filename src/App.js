import React from 'react';
import GridRow from './components/GridRow.js';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      boardState: [["","",""],["","",""],["","",""]], 
      turn:"X"
    };
  }
  updateBoardState = (row, col) => {
    const newState = this.state.boardState;
    newState[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X"? "O": "X",
      boardState: newState
    })
  }
  render(){    
    return (
      <>
      <div className='container'>        
        <GridRow row={0} boardstate={this.state.boardState} updater={this.updateBoardState}/>
        <GridRow row={1} boardstate={this.state.boardState} updater={this.updateBoardState}/>        
        <GridRow row={2} boardstate={this.state.boardState} updater={this.updateBoardState}/>
      </div>
      </>
    );
  }
}

export default App;

