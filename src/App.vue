<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4A5568;
}

#nav a {
  font-weight: bold;
  color: #4A5568;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  padding: 20px 0;
  background-color: #4299e1;
}

#nav a:hover {
  color: #ffffff;
  padding: 20px 0;
  background-color: #4299e1;
}
</style>
