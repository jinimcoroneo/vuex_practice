<template>
  <div>
    <div class="left">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import Stats from './Stats.vue'
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    Stats
  },
  computed: {
    ...mapState([
    'title',
    'links'
  ]),
}

// use a diff name for the state 
  // computed: mapState({
  //   newTitle: 'title'
  // })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
