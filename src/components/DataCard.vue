<template>
  <div class="datacard">
    <div class='left-icon'>
        <img :src="require('../assets/'+path+'.png')" />
    </div>
    <div class='right-data'>
        <p>{{ msg }}</p>
        <span>${{ data }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    data: Number,
    msg: String,
    path: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .datacard{
    padding: 20px;
    background: #191C24;
    color: #6C7293;
    font-weight: 400;
    flex-grow: 2;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 .datacard .left-icon img{
     width: 48px;
     height: 48px;
 }
  .datacard .right-data{
    
 }
   .datacard p{
       padding-bottom: 10px;
   }
   .datacard span{
       color: #fff;
   }
</style>
