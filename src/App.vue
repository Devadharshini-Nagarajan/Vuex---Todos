<template>
  <div id="app">
    <div class="container">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
}
body {
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  padding: 0 2em;
  max-width: 1100px;
  margin: auto;
  overflow: auto;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
