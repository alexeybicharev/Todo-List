export default {
    template: document.querySelector('.todo'),
    props: {
        text: String,
        completed: Boolean
    },
    data() {
        return {
            isEditing: false,
            newTodoText: ""
        }
    },
    methods: {

    }
}