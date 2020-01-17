<template>
  <div id="app">

    <div id="nav">
    </div>
   
    <keep-alive exclude="Detail">
     <router-view/>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    width:10rem;
    margin: 0 auto;

}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
