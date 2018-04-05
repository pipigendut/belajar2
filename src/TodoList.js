import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: this.props.item.judul,
      konten: this.props.item.konten,
      preview: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleJudulChange = this.handleJudulChange.bind(this);
    this.handleIsiChange = this.handleIsiChange.bind(this);
  }

  // static defaultProps = {
  //   id: 0,
  //   judul: 'Loading...',
  //   deskripsi: 'Loading...',
  //   mode: ''
  // }

  handleClick() {
    if (this.state.preview){
      this.setState({ preview: false })

    }
    else {
      this.setState({ preview: true })
  		this.props.onItemChanged(
        {
          id: this.props.item.id,
          judul: this.state.judul,
          konten: this.state.konten
        }
      )
    }
	}

  handleJudulChange(event) {
    this.setState({judul: event.target.value});
  }

  handleIsiChange(event) {
    this.setState({konten: event.target.value});
  }

  render() {
    let editStyle = {};
    let previewEditStyle = {};
    if (!this.state.preview)
      editStyle.display = 'block';
    else
      editStyle.display = 'none';

    let previewStyle = {};
    if (this.state.preview)
      previewStyle.display = 'block';
    else
      previewStyle.display = 'block';


    return (
      <div>
        <div style={previewStyle}>
          <h3>{this.props.item.judul}</h3>
          <p>{this.props.item.konten}</p>
          <div style={previewEditStyle}>
          </div>
        </div>
        <div style={editStyle}>
              <input id="judul" type="text" placeholder="masukan namamu"
                      onChange={this.handleJudulChange} value={this.state.judul}/>

              <input id="konten" type="text" placeholder="masukan namamu"
                      onChange={this.handleIsiChange} value={this.state.konten}/>
        </div>
        <button onClick={this.handleClick}>{this.state.preview ? 'Edit' : 'Update'}</button>
      </div>
    );
  }
}

export default TodoList;
