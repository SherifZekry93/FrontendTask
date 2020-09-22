<template>
  <div>
    <profile-info />
    <email-form />
  </div>
</template>

<script>
import info from './Profile-info/info.vue'
import EmailForm from './Form/EmailForm'
export default {
  name: 'HelloWorld',
  components:{
    "profile-info":info,
    'email-form':EmailForm
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
