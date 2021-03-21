<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{text}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',

  data(){
    return {
      text: ''
    }
  },
  created(){
    this.text = this.$store.state.text
  }

}
</script>
