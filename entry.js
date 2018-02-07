angular.module('app')
.component('entry', {
  bindings: {
    todo: '<',
  },
  template: `
    <li>
      {{$ctrl.todo}}
    </li>
  `
})