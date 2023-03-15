<template>
  <div class="navbar flex-row">
    <div class="nav-logo">
      <img src="/logo-garudaku-news.png" />
    </div>
    <div class="nav-links">
      <p v-on:click="$router.push('/')">Home</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.navbar {
  background-color: $secondary-500;
  width: 100%;
  height: 10vh;
  padding: 0 1rem;
  column-gap: 1rem ;
  display: fixed;
  position: fixed;
  top: 0;
  box-shadow: $shadow-primary;
  z-index: 100;
}

.nav-logo {
  img {
    width: auto;
    height: 70px;
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.nav-links {
  cursor: pointer;
}

.nav-links:hover {
  color: $primary-500;
  font-weight: bold;
  transition: $transition
}
</style>