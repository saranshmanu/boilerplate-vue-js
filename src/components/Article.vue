<template>
  <a-card>
    <div id="card">
      <img
        src="https://www.amrutsoftware.com/wp-content/uploads/2015/03/default-placeholder.png"
      />
      <h3>{{ data.title }}</h3>
      <p>{{ data.content }}</p>
    </div>
  </a-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 100%;
  object-fit: cover;
}
p {
  word-wrap: break-word;
}
#card {
  padding: 10px;
}
</style>
