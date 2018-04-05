import React from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };

    this.handleaddItem = this.handleaddItem.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  handleaddItem(e){
    console.log('handleAddItem invoked');
    e.preventDefault();
    var newItemm = {
      konten: this.state.content,
      judul: this.state.title,
      id: Date.now(),
      editMode: false
    }
    this.props.onFormSubmit(newItemm);
    this.refs.judul.value = "";
    this.refs.isi.value = "";
  }

  onChangeTitle (event) {
    this.setState({ title: event.target.value })

  }

  onChangeContent (event) {
    this.setState({ content: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleaddItem}>
          <p>
          <label> Judul : </label>
            <input type="text" ref="judul" onChange={this.onChangeTitle}
              value={this.state.judul} placeholder="Enter Item"/>
          </p>
          <p>
          <label> Isi : </label>
            <input type="text" ref="isi" onChange={this.onChangeContent}
              value={this.state.isi} placeholder="Enter Item"/>
          </p>
          <input type="submit" value="Add Item"/>
        </form>
      </div>
    )
  }
}

export default TodoForm;
