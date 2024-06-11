<script>
/*eslint-disable*/
export default {
};
</script>
<template>
  <div class="table w-full ">
  <table class="table w-full">
  <thead class="thead">
    <tr>
      <th :style="this.$store.state.lang==='en'?'border-top-left-radius: 10px':'border-top-right-radius: 10px'">
      {{this.$store.state.lang==='en'?'ID':'رمز التعريف'}}</th>
      <th> {{this.$store.state.lang==='en'?'Client Name':'اسم العميل'}}</th>
      <th> {{this.$store.state.lang==='en'?'Type':'النوع'}}</th>
      <th> {{this.$store.state.lang==='en'?'Priority':'الأهمية'}}</th>
      <th> {{this.$store.state.lang==='en'?'Created By':'إنشاء بواسطة'}}</th>
      <th :style="this.$store.state.lang==='en'?'border-top-right-radius: 10px':'border-top-left-radius: 10px'">{{this.$store.state.lang==='en'?'Date':'التاريخ'}}</th>
    </tr>
  </thead>
  <tbody :class="this.$store.state.theme==='dark'?'tdatadark':'tdatalight'">
    <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
     <tr>
      <td>Dr.2453</td>
      <td>Malcolm Lockyer</td>
      <td>follow up</td>
      <td>High</td>
      <td>Employee4</td>
      <td>5 May</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<style scoped>

.thead{
background-color:#316EC9 ;
color: white;
font-size: 14px;

}
.tdatalight{
  background-color: #ECD6B9;
  color: #000000;
  font-display: bold;

  
}
.tdatadark{
  background-color: #2c2c2c;
  font-display: bold;
  color: white;
}
</style>