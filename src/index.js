import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
window.items = [
  {
    id: 1,
    judul: "belajar",
    konten: "react",
    editMode: false
  }
]

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: window.items
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onItemChanged = this.onItemChanged.bind(this);
  }

  addItem(newItem){
    console.log('addItem invoked');
    console.log('newItem', newItem);
    // var newItem = {
    //   konten: this.refs.isi,
    //   judul: this.refs.judul,
    //   id: Date.now(),
    //   editMode: false
    // };

    // mengubah items dengan setState
    // variable items untuk menampilkan data di view berdasarkan inputan this._inputElement
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  onItemChanged(updatedItem) {
    const _itemIdx = this.state.items.findIndex(function(_item) {
        return _item.id === updatedItem.id
      }
    )
    window.items[_itemIdx] = Object.assign({}, updatedItem)

    this.setState({ items: window.items })
  }

  deleteItem(ids){
    var filteredItems = this.state.items.filter(function (itemdel) {
      return (itemdel.id !== ids);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    const _deleteItem = this.deleteItem
    const _onItemChanged = this.onItemChanged
    return (
      <div>
      <div className="main">
          <TodoForm onFormSubmit={this.addItem}/>
          {this.state.items.map(function(item) {
            // {this.state.items.map(item => {
            return (
              <div className="form" key={item.id}>
                <TodoList item={item} onItemChanged={_onItemChanged} />
                <button onClick={() => _deleteItem(item.id)}> X </button>
              </div>
            )
          })}
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root1')
);
