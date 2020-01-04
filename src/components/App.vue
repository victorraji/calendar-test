<template>
  <div id="app">
    <div id ="appl">
      <b-row class="header">
    <b-col class="peexo" md="4">PEEXOO</b-col>
    <b-col ><b-breadcrumb style="background:#FEFBF3;color:#2c3e50" class="d-flex justify-content-end" :items="items"></b-breadcrumb></b-col>
  </b-row>
    <!-- <div><div>PEEX00</div><b-breadcrumb style="background:#FEFBF3;color:#2c3e50" class="d-flex justify-content-end" :items="items"></b-breadcrumb></div> -->
     <div class="image-container">
       <!-- <img alt="Vue logo" src="../assets/den-trushtin-tozc2STS8QM-unsplash.jpg"> -->
     </div>
     <b-row class="middle-nav">
    <b-col cols="4" md="2"><img alt="Vue logo" class="img-mid" src="../assets/den-trushtin-tozc2STS8QM-unsplash.jpg"></b-col>
    <b-col cols="4" md="2"> Details </b-col>
    <b-col cols="4" md="2">Portfolio</b-col>
    <b-col cols="4" md="2"><div class="avail">Availabilility </div></b-col>
    <b-col cols="4" md="2">Pricing Packages</b-col>
    <b-col cols="4" md="2">Reviews</b-col>
  </b-row>
   <!-- <b-row align-h="end">
    <b-col cols="4"><b-button pill variant="warning">Message photographer</b-button></b-col>
    <b-col cols="4"><b-button style="color:white;" pill variant="warning">Book Now</b-button></b-col>
  </b-row> -->
  <div class="container-grid">
        <div class="shots" >Victor Shotz.Tm </div>
        <div class="button-container">
          <button class="message">Message photographer</button>
          <button class="book">Book Now</button>
        </div>
        </div>
    <div  id="nav">
      <div class="card-container">
      <b-card class="card-g">
    <current-month>
    </current-month>
    <div class="weeks">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
      <div class="weeks" v-for="(week, id) in weeks" :key="id">
<calendar-day  v-for="(day, id) in week" :day = "day" :key="id"> </calendar-day>
    </div>
    </b-card>
    </div>
  <img   @click="dec" alt="Vue logo" src="../assets/icons8-previous-40.png">
  <img   @click="inc" alt="Vue logo" src="../assets/icons8-next-40.png">
    </div>
    </div>
<div class="f-grid">
      <div class="one">Quick Links</div>
      <div class="one">Company</div>
      <div class="one two">Connect with Us</div>
      <div class="two">Find a photographer</div>
      <div class="eight">About Us</div>
      <div class="two">5a Awudu Egheda</div>
      <div class="three">Find my photos</div>
      <div class="nine">FAQs</div>
      <div class="two">Lekki,Lagos</div>
      <div class="four">Reexomemories</div>
      <div>pricing</div>
      <div class="two">customerservice@Peexoo.ai</div>
      <div class="five">Become a Photographer</div>
      <div>Careers</div>
      <div class="two">+23456789000</div>
      <div>Helps and Supports</div>
      <div>Terms and Condition</div>
      <!-- <div> Privay Policy</div> -->
    </div>
 <div class="footer">@2019 Peexo Nigeria Limited</div>
  <!-- <button  @click="dec"> - Back</button> <button @click="inc"> + Front</button> -->
  </div>
</template>
<script>
/*eslint-disable*/
import CalendarDay from './CalendarDay.vue'
import CurrentMonth from './CurrentMonth.vue'

export default {
    data() {
      return {
        contents:[
          "Details", "Portfolio","Availabilility", "Pricing Packages", "Reviews"
        ],

        items: [
          {
            text: 'I am a photographer',
            active: true
          },
          {
            text: 'Explore photos',
            active: true
          },
          {
            text: 'Find a photographer',
            active: true
          },
           {
            text: 'Find my photos',
            active: true
          },
             {
            text: 'Login or Register',
            active: false
          }

        ]
      }
    },
  methods:{
dec(){
  if (this.month === 1){
  this.$store.commit('setCurrentMonth', 12);
  this.$store.commit('setCurrentYear', this.year - 1);
  }else{
    this.$store.commit('setCurrentMonth', this.month - 1);

  }
},
inc(){
  if (this.month === 12){
  this.$store.commit('setCurrentMonth', 1);
  this.$store.commit('setCurrentYear', this.year + 1);
  }else{
    this.$store.commit('setCurrentMonth', this.month + 1);
  }
}
  },
    computed:{
      month(){
        return this.$store.state.currentMonth
      },
      year(){
        return this.$store.state.currentYear
      },
      days(){
        console.log("dyas  guy")
        console.log(this.month)
        let days =[];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1,'days');
        } while ((currentDay.month() +1) === this.month);

        //Add Previous Days to start
        currentDay = this.$moment(days[0]);

        const SUNDAY = 0;
        const MONDAY = 1;

        if (currentDay.day() !== MONDAY){
          do{
            currentDay = this.$moment(currentDay).subtract(1,'days');
            days.unshift(currentDay);
          }while(currentDay.day() !== MONDAY);
        }

        
        // Add Previous Days to start
        currentDay = this.$moment(days[days.length-1]);
         if (currentDay.day() !== SUNDAY){
          do{
            currentDay = this.$moment(currentDay).add(1,'days');
            days.push(currentDay);
          }while(currentDay.day() !== SUNDAY);
         }
         console.log(days.length)
         return days;
        //  days.length
    },
    weeks(){
      let weeks=[];
      let week =[];
//       for (let day of this.days){
//   week.push(day);
//   if (week.length === 7){
//     weeks.push(week); 
//     week = [];
//   }
// }
for(let i=0;i<this.days.length; i++){
  week.push(this.days[i]);
  if(week.length === 7){
    weeks.push(week);
    week=[];
  }
}
console.log(weeks)
return weeks   
 }
  },
  components:{
    CalendarDay,
    CurrentMonth
  }}
</script>

<style>

.one {
 font-size: 15px;
 font-weight: 600
}
.f-grid{
   font-size: 12px;
  padding-top:50px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
    /* grid-gap: 10px; */
  grid-auto-rows: minmax(50px, auto);
  padding: 15px;
}
.card-container{
   display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px
}


.footer{
  margin-top: 150px;
  background-color:black;
  height:50px;
  color:white;
}


@media (max-width:700px){
    .shots{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:900;
  font-size:25px;
  /* margin-left:-106px */

}
    .two {
  word-wrap: break-word;
  max-width: 100px;
}
  .button-container{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height:50px;
  padding: 50px;
  /* padding-right:100px */
  

}
        .img-mid {
           height:2px;
           width:2px
        }
         .avail{
        /* height: 80px; */
       
    height: 52px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
      }
      .middle-nav{
  background: #DE9E04;
    height: 80px;
    display: flex;
    color:white;
    justify-content: flex-end;
    align-items: center;
}
.card-g{
  width: 100%;
}

           .message{
    margin-right: 12px;
    background: #fefbf3;
    height: 50px;
    width: 606px;
    color: #ffb500;
    border-radius: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #ffb500;
    font-size: 12px;
    text-align: center;
}
 
.book{
  background:#FFB500;
  /* padding-left:50px; */
  height: 50px;
  width:250px;
  color: white;
  border-radius:50px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #FFB500;
width:321px;
margin-left:3px;
 font-size: 13px;
 
}
    }
    @media (min-width:1000px){
      .container-grid {
  display: flex;
  justify-content: space-evenly;
}
   .shots{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:900;
  font-size:25px;
  margin-left:-106px
  }
      .button-container{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height:50px;
  padding: 50px;
  padding-right:100px
}
      .book{
  background:#FFB500;
  /* padding-left:50px; */
  height: 50px;
  width:200px;
  color: white;
  border-radius:50px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #FFB500;
}
           .message{
             
/* padding-right:50px; */
margin-right:15px;
background: #FEFBF3;
  height: 50px;
  width:230px;
  color: #FFB500;
  border-radius:50px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #FFB500;

}
 
      .img-mid {
       height:120px;
       width:150px;
        margin-right:-200px
      }
      .avail{
        height: 60px;
        background-color: black;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
      }
      .middle-nav{
  background: #DE9E04;
    height: 60px;
    display: flex;
    color:white;
    justify-content: flex-end;
    align-items: center;
}
.card-g{
  width: 50%;
}
    }
.peexo{
  color:#FFB500;
  font-size: 50px
}
.header{
      height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image-container{
  height:400px;
  width:100%;
  background-image: url(../assets/fans.jpg);
  background-size: contain
}

.weeks {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-gap: 10px; */
   /* background-color: #2196F3; */
   grid-auto-rows: minmax(40px, auto);
   font-size: 10px

}
#app {
  font-family: 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#appl{
   font-family: 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FEFBF3
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
