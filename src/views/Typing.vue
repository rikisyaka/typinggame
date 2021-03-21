
<template>
<div class="typing">
  <h2> 現在のスコアは{{ score }}点です。</h2><br>
  

  <span v-show="timerOn" class="odai-style">{{ odai }}</span><br>

  <span>{{ text }}</span><br>
  <input v-model="text" class="form-control"><br>
  <CountDown  :timerOn="timerOn" :score="score"  @start-fg='timerOn = $event' v-on:timer-click="timerChange"/>
    
  
 
</div>
</template>
<style>
html {
  background: rgb(213, 239, 240);
  font-family: 'Avenir', Helvetica, Arial, 'system-ui', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}
.form-control {
    width: 40%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.odai-style{
    color: red;
}


</style>
<script>

import CountDown from '@/components/CountDown.vue'

export default{
 name: 'Typing',
  components: {
    CountDown
   
    
  },
    data(){
        return {
            score: 0,
            odai: 'start',
            text: '',
            tags: ['okaka', 'sake', 'tarako','ume'],
            num: 0,
            timerOn: false
        }
        
    },
    methods: {
        timerChange(timerOn){
            console.log('timer-change')
            this.timerOn = timerOn
            this.text=null
        }

    },
    watch: {
        text(){
            
            if(this.odai == this.text&& this.timerOn==true){
                this.score += 10
                this.odai = this.tags[ Math.floor( Math.random() * this.tags.length ) ]
                this.text =""                 
            }
            return this.score

        }
    },
 
    
    
    
}

</script>