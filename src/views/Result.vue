<template>
  <div class="result">
    <h1>あなたの点数は{{score}}でした！</h1>
    <h1>{{hyouka}}</h1>
  </div>
</template>
<script>
export default {
  name: 'Result',
    data(){
        return{
            score: 0,
            hyouka: ""
        }       
    },
    created(){
        console.log(this.$store.state.score)
        this.score = this.$store.state.score
    },
    watch: {
      score(){
        if(this.score >= 100){
          this.hyouka ="すごい"
        }else if(this.score >= 50){
          this.hyouka ="まだまだ"
        }
        return this.hyouka
      }

    }
}
</script>