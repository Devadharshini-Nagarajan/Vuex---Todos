import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos(state) {
    return state.todos;
  },
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response);
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("removeTodo", id);
  },
  async filterTodo({ commit }, no) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${no}`
    );
    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, upTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${upTodo.id}`,
      upTodo
    );
    commit("upTodo", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((el) => el.id !== id)),
  upTodo: (state, upTodo) =>
    (state.todos = state.todos.map((el) => {
      if (el.id === upTodo.id) return upTodo;
      return el;
    })),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
