import React from 'react';
import './index.css';

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
      <div className="form">
        <form onSubmit= {this.handleaddItem}>
        <table cellPadding="5" cellSpacing="10">
        <tbody>
          <tr>
          <td> Judul : </td>
          <td><input type="text" ref="judul" onChange={this.onChangeTitle}
              value={this.state.judul} placeholder="Enter Item"/> </td>
          </tr>
          <tr>
          <td> Isi : </td>
          <td><input type="text" ref="isi" onChange={this.onChangeContent}
              value={this.state.isi} placeholder="Enter Item"/></td>
          </tr>
          <tr>
          <td colSpan="2" align="center"><input type="submit" value="Add Item"/></td>
          </tr>
        </tbody>
        </table>
        </form>
      </div>
      </div>
    )
  }
}

export default TodoForm;
