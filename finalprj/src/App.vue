<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg custom-pink" data-bs-theme="light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Jessica Hanschke</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
              <span class="visually-hidden">(current)</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/About">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.custom-pink {
  background-color: #f8d4e2; /* Softer pastel pink */
  color: #333; /* Darker text color for contrast */
}
</style>
