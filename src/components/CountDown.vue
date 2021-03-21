<template>
    <div>
       <p class="infosen-style">残りあと{{sec}}秒です</p> 
      <button v-on:click="start" v-show="!timerOn" @click="submittimer">Start</button>
      <button v-on:click="stop" v-show="timerOn" @click="submittimer">Stop</button>
    </div>
</template>
<style>
.infosen-style{
   right:10px;
   top:200px;
   color: red;
}
</style>


<script>
export default {
    data(){
        return{
            formatTime: 0,      
            sec: 10,
            timerOn: false,
            timeObj: null,
            
        }
    },
    props: ['score'],
    
    methods: {
         
         count(){
            this.sec--
            if(this.sec <= 0){               
               this.timeObj = clearInterval(this.timeObj)
               this.sec = 10
               this.$store.dispatch('setScore', this.score)
               this.$router.push({name: 'Result'})
            }
         },
         start(){
            this.timerOn = true
            let self = this;

            this.timeObj =setInterval(function() {self.count()},1000)
            console.log(this.timerOn)
            this.$emit("start-fg",this.timerOn);
         },
         stop(){
            this.timeObj = clearInterval(this.timeObj)
            this.timerOn = false
         },
         submittimer(){
            this.$emit('timer-click',this.timerOn)
            console.log("submittimer")
         }

     },
    
}
</script>
