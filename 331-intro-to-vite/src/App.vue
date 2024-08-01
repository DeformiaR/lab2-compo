<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const pageSize = ref(5)
const router = useRouter()
const route = useRoute()

function updatePageSize() {
  router.push({
    ...route,
    query: {
      ...route.query,
      pageSize: pageSize.value
    }
  })
}
</script>

<template>
  <div id="layout">
    <header>
      <div class="warpper">
        <nav>
          <RouterLink to="/">Event</RouterLink> | <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/student">Student</RouterLink>
        </nav>
        <div class="page-size-selector">
          <label for="pageSize">Events per page:</label>
          <select v-model="pageSize" @change="updatePageSize">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-box-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

.page-size-selector {
  margin-top: 10px;
}
</style>
