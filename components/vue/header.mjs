export default {
    template: document.querySelector('.todoHeader'),
    data() {
        return {
            showInputField: true,
            newTodo: "",
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() == "") return;

            let todoItem = {
              text: this.newTodo,
              isCompleted: false
            }

            this.$emit('new-todo', todoItem)
            this.newTodo = "";
        },
    },
    directives: {
        focus: {
          inserted(el) {
            el.focus();
          }
        }
      }
}