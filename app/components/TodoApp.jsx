var React = require('react');
var TodoList = require('TodoList');
const AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk Yumi'
        }, {
          id: 2,
          text: 'Play with nep2'
        }, {
          id: 3,
          text: 'Ctab mumuh'
        }, {
          id: 4,
          text: 'Jiggle mumuh'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
