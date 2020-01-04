<template>
  <div>
{{formattedDate}}
  </div>
</template>
<script>
/*eslint-disable*/
export default {
    computed:{
        formattedDate(){
            return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format("MMM YYYY");
        },
          month(){
        return this.$store.state.currentMonth
      },
      year(){
        return this.$store.state.currentYear
      },
    }
}
</script>
