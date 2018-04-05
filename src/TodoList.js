import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: props.judul,
      konten: props.deskripsi,
      preview: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleJudulChange = this.handleJudulChange.bind(this);
    this.handleIsiChange = this.handleIsiChange.bind(this);
  }

  static defaultProps = {
    id: 0,
    judul: 'Loading...',
    deskripsi: 'Loading...',
    mode: ''
  }

  handleClick() {
		this.setState(function(prevState) {
			return {preview: !prevState.preview};
		});
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
          <h3>{this.state.judul}</h3>
          <p>{this.state.konten}</p>
          <div style={previewEditStyle}>
          </div>
        </div>
        <div style={editStyle}>
          <label> Judul: </label>
              <input id="judul" type="text" placeholder="masukan namamu"
                      onChange={this.handleJudulChange} value={this.state.judul}/>
          <label> Isi: </label>
              <input id="konten" type="text" placeholder="masukan namamu"
                      onChange={this.handleIsiChange} value={this.state.konten}/>
        </div>
        <button onClick={this.handleClick}>{this.state.preview ? 'Edit' : 'Preview'}</button>
      </div>
    );
  }
}

export default TodoList;
