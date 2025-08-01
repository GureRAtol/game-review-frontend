<template>
  <div>
    <header>
      <h1>Game Reviews</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/search">Search</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 20px;
  background: #222;
  color: #fff;
}
nav a {
  margin-right: 10px;
  color: #90caf9;
}
</style>
