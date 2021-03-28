<template>
  <div class="gutter-example">
    <a-button @click="refresh()">Refresh</a-button>
    <a-row type="flex" justify="top" :gutter="[32,16]" align="stretch">
      <a-col :span="8" v-for="(headline, index) in headlines" :key="index">
        <Article :data="headline" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Article from "../components/Article";

export default {
  computed: mapState({
    headlines: (state) => state.articles.articles,
  }),
  methods: {
    refresh() {
      this.$store.dispatch("articles/getArticles");
    },
    ...mapActions("articles", ["getArticles"]),
  },
  created() {
    this.$store.dispatch("articles/getArticles");
  },
  components: {
    Article,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>

