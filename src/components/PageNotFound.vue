<template>
  <div class="container print">
    <div class="card alert-danger">
      <div class="card-body">
        <h1 class="card-text">{{ errorMessage }}</h1>
        <b-button pill variant="success" @click="homePage"
          >Go To Home Page</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "Page Not Found",
    };
  },
  methods: {
    homePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.print {
  text-align: center;
  color: white;
  padding-top: 90px;
  height: 100vh;
}
</style>
