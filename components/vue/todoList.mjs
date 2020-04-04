import todoHead from "./header.mjs";
import todoItem from "./todo.mjs";

function vueInit() {
  new Vue({
    el: ".todoApp",
    data () {
      return {
        todoList: [

        ]
      }
    },
    components: {
      'todo-header': todoHead,
      'todo-item': todoItem
    },
    methods: {
      addTodo(todoItem) {
        this.todoList.push(todoItem)
      },
      removeTodo(todoItem) {
        this.todoList.splice(this.todoList.indexOf(todoItem), 1)
      },
      completeTodo(todoItem) {
        todoItem.isCompleted = !todoItem.isCompleted
      }
    }
  });
}

window.addEventListener("load", vueInit);