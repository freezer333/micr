<template>
  <div id="app">
    <section class="container">
      <p style="margin-bottom:20px">Enter routing, account, and check number to edit the MICR line</p>
      <div class='columns'>
        <div class='field column'>
          <label class='label'>Routing number</label>
          <div class='control'>
            <input type='text' class='input' placeholder='Enter routing number' v-model='routing'/> 
          </div>
        </div>
        <div class='field column'>
          <label class='label'>Account number</label>
          <div class='control'>
            <input type='text' class='input' placeholder='Enter account number' v-model='account'/> 
          </div>
        </div>
        <div class='field column'>
          <label class='label'>Check number</label>
          <div class='control'>
            <input type='text' class='input' placeholder='Enter check number' v-model='number'/> 
          </div>
        </div>
      </div>
    </section>
    <Micr :routing="routing" :account="account" :number="number"/>

  </div>
</template>

<script>
import Micr from './components/Micr.vue'

export default {
  name: 'App',
  components: {
    Micr
  },
  data: function () {
    return {
      account: "123456789",
      routing: "01986516",
      number: "0000815"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
