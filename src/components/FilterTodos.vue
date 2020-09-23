<template>
  <div class="filters">
    Filter Todos:
    <select v-on:change="(e) => filterTodo(e.target.value)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodo"]),
  },
};
</script>

<style scoped>
.filters {
  margin: 20px 0;
}
</style>