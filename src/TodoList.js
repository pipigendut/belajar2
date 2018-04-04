import React from 'react';

class TodoList extends React.Component {
  static defaultProps = {
    id: 0,
    judul: 'Loading...',
    deskripsi: 'Loading...'
}
  render() {
    return (
      <div>
        <h3>{this.props.judul}</h3>
        <p>{this.props.deskripsi}</p>
      </div>
    );
  }
}

export default TodoList;
