import React from 'react';

class GridItem extends React.Component {
  constructor(props)  {
    super(props);
  }
    render(){
      
        return (
          <div className='grid-item' onClick={() => {this.props.updater(this.props.row, this.props.column)}}>
            {this.props.boardstate[this.props.row][this.props.column]}
          </div>
        );
    }
}

export default GridItem;