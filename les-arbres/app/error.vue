<script>
import Header from "./components/Header.vue";

export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <NuxtLayout name="404">
    <div id="page">
      <Header />
      <main>
        <div>
          <div class="text-4xl">Désolé la page demandée n'existe pas.</div>
          <button class="font-bold button" @click="goBack">Back</button>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<style scoped>
main > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
}
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  /* background: black; */
  /* color: white; */
}
</style>
