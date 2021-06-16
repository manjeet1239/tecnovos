import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Layout, Row, Col } from 'antd';
class App extends Component {
  state = {
    items: [],
    name: '',
    hideInput: false
  }


  addHandler = () => {
    if (this.state.name !== '') {
      const userInput = {
        id: Math.random(),
        name: this.state.name,
        isEdit: false
      };
      const items = [...this.state.items];
      items.push(userInput);
      this.setState({
        items,
        name: ""
      }, () => {
        console.log(this.state.items);
      })
    }
  }

  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value })
  }
  clickHandler = (id) => {
    this.setState({
      items: this.state.items.map(el => (el.id === id ? Object.assign({}, el, { isEdit: true }) : el)),
      hideInput: true
    });
  }
  updateHandler = (id) => {
    this.setState({
      items: this.state.items.map(el => (el.id === id ? Object.assign({}, el, { isEdit: false, name: this.state.name }) : el)),
      hideInput: false
    });
  }
  render() {
    const { items, hideInput } = this.state;
    return (
      <Layout className="container">
        <Row>
          {!hideInput ? <div> <input type="text" onChange={this.changeHandler} name="name" value={this.state.name} />
            <button onClick={this.addHandler}>Add</button></div> : null}

        </Row>
        <List items={items} clickHandler={this.clickHandler} hideInput={hideInput} changeHandler={this.changeHandler}
          updateHandler={this.updateHandler} />

      </Layout>
    );
  }

}

export default App;
