<template>
  <div>
    <h3>Todos</h3>
    <FilterTodos />
    <div class="legend">
      <span>Double click to mark as complete</span>
      <div>
        <span class="incomplete-box"></span>
        <span>Incomplete</span>
      </div>
      <div>
        <span class="complete-box"></span>
        <span>Complete</span>
      </div>
    </div>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        @dblclick="onDoubleClick(todo)"
        v-bind:class="{'is-complete': todo.completed}"
      >
        {{todo.title}}
        <button @click="deleteTodo(todo.id)">x</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import FilterTodos from "./FilterTodos";

export default {
  name: "Todos",
  components: {
    FilterTodos,
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    ...mapMutations(["setTodos"]),
    onDoubleClick(todo) {
      const upTodo = {
        title: todo.title,
        id: todo.id,
        completed: !todo.completed,
      };
      this.updateTodo(upTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
    // directly call mutations
    let val = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ];
    // this.setTodos(val);
  },
};
</script>

<style scoped>
.legend {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
  margin-right: 10px;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b882;
  margin-right: 10px;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  /* margin-top: 3rem; */
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.is-complete {
  background: #35495e;
}
button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  background: red;
  border-radius: 20px;
  outline: 0;
  border: 1px solid red;
}
</style>