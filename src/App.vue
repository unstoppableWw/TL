<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <div>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/components/Bottom.vue'
</script>

<style  lang="scss"></style>
