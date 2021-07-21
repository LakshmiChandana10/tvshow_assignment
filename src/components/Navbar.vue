<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="nav-link" :to="{ name: 'Home' }">
        <b-icon icon="display" class ="navbar-icon"></b-icon>
          TVSHOWS
        </router-link>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            v-model="query"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click="goToSearch"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    goToSearch() {
      this.$router.push({
        name: "Search",
        params: {
          query: this.query,
        },
      });
    },
  },
};
</script>
<style scoped>
.nav-link {
  color: red;
}
.navbar-icon {
  color: rgb(179, 24, 24);
}
.btn {
  color: red;
}
</style>
