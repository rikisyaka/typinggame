
<template>
<div class="home">
   <h1>タイピングゲームを始めよう！</h1>
   <h2>下記のリンクをクリックしてください</h2>
    <router-link to="/typing">スタート</router-link>

</div>
 
  
</template>

<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input v-model="text">
    <button @click="shareText">share</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/typing">スタート</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
    
  },
  data(){
    return {
      text: ''
    }
  },
  methods:{
    shareText(){
      this.$store.dispatch('setText', this.text)
      this.$router.push({name: 'About'})
    }
  }
}
</script>

!-->