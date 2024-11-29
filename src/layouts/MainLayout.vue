<template>
  <div>
    <h1>Main layout</h1>
    <div>
      <RouterLink to="/">Home 1</RouterLink>
      <RouterLink to="/home2">Home 2</RouterLink>
      <RouterLink :to="{name: 'login'}">Login</RouterLink>
    </div>
    <div class="container mx-auto">
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
</script>
