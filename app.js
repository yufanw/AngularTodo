angular.module('app', [])
.controller('AppCtrl', function() {
  this.todos = [];
  this.bin = [];
  this.currentItem;

  this.addTodo = () => {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
    }
    this.newTodo = '';
  };

  this.markComplete = (index) => {
    this.bin.push([this.todos.splice(index, 1).join(), index]);
    console.log(this.bin)
  };

  this.undoRemove = () => {
    if (this.bin.length > 0) {
      this.currentItem = this.bin[this.bin.length - 1];
      this.todos.splice(this.currentItem[1], 0, this.currentItem[0]);
    }
    this.bin.pop();
    this.currentItem = null;
  };
})
.component('todoList', {
  controller: 'AppCtrl',
  templateUrl: 'app.html'
})
