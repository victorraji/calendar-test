<template>
  <div :class="classObject">
   {{ day.format('D') }}
  </div>
</template>
<script>
/*eslint-disable*/
export default {
    props:['day'],
    computed:{
        classObject(){
            let today = this.day.isSame(this.$moment(),'day')
            let month = this.day.isSame(this.$moment(),'month')
            let one = 1;
            let two = 2;
            let three = 3;
            let four = 4;
            let five = 5;
            let six = 6;
            return {
                day:true,
                today,
                past: this.day.isSameOrBefore(this.$moment(),'day') && !today,
                // after: this.day.isSameOrAfter(this.$moment(),'day') && !today
            }
        }
    }
}
</script>
<style>
.day {
  font-size: 10px;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center
  
}
.today{
    /* background-color: red; */
    color:green;
    background :yellow;
    border-radius: 30px
}
.past{
    /* background-color: red; */
    color:red;
    /* background :grey; */
    border-radius: 30px
}
.after{
    /* background-color: red; */
    color:red;
    /* background :grey; */
    border-radius: 30px
}

</style>
