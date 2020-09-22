<template>
  <div>
    <profile-info />
        <hr>

    <email-form />
        <hr>

    <footer-component />
  </div>
</template>

<script>
import info from './Profile-info/info.vue'
import EmailForm from './Form/EmailForm'
import FooterComponent from './Footer/footer'
export default {
  name: 'HelloWorld',
  components:{
    "profile-info":info,
    'email-form':EmailForm,
    'footer-component':FooterComponent
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
</style>
