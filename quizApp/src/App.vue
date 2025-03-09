<template>
<div>
  <nav class="nav bg-light mb-4">
      <router-link to="/" class="nav-link text-dark" active-class="active">Home</router-link>
      <router-link to="/about" class="nav-link text-dark" active-class="active">About</router-link>
      <router-link to="/task/1" class="nav-link text-dark" active-class="active">Task Details</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

