<template>
  <div class="home">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },
};
</script>
