import React from 'react';
import GridItem from './GridItem'

class GridRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="grid-row">
          {[0,1,2].map((col) => {
              return <GridItem column={col} row = {this.props.row} boardstate={this.props.boardstate} updater={this.props.updater}/>
          })}
        </div>
        );
    }
}

export default GridRow;