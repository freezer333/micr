<template>
  <section>
    <div class='colored'>
    <h1>MICR LINE</h1>
    <div style="font-family: 'MICR E13B 2.1'; font-weight: normal; font-style: normal;">
      <span>A</span>
      <span>{{routing}}</span>
      <span class='m'>A</span>
      
      <span>C</span>
      <span>{{account}}</span>
      <span class='m'>C</span>
      <span>{{number}}</span>
      
    </div>
  </div>
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th>MICR Symbol</th>
            <th>Alpha-numeric</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='micr'>A</td>
            <td>A</td>
            <td>Transit</td>
          </tr>
          <tr>
            <td class='micr'>B</td>
            <td>B</td>
            <td>Amount</td>
          </tr>
          <tr>
            <td class='micr'>C</td>
            <td>C</td>
            <td>On-Us</td>
          </tr>
          <tr>
            <td class='micr'>D</td>
            <td>D</td>
            <td>Dash</td>
          </tr>
        </tbody>
      </table>
  </div>

  <div style='margin-top:60px;'>
    <h1>Usage</h1>
    <ol>
      <li>
        <h2>Add the font face to your application.</h2>
        <a href='/MICRE13B21BT.woff'>MICRE13B21BT.woff</a>
      </li>
      <li>
        <h2>Reference the font face in your CSS</h2>
        <pre>@font-face {
    font-family: 'MICR E13B 2.1';
    src: url('/MICRE13B21BT.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }</pre>
      </li>
      <li>
        <h2>Apply the font to desired text</h2>
        <pre>font-family: 'MICR E13B 2.1'; font-weight: normal; font-style: normal;</pre>
      </li>
      <li>
        <h2>Use the alpha-numeric symbols as needed: 0-9, A-D</h2>
      </li>
    </ol>
  </div>

  </section>
</template>

<script>
export default {
  name: 'Micr',
  props: {
    routing: String,
    account: String, 
    number: String
  }
}
</script>


<style scoped>
.micr {
  font-family: 'MICR E13B 2.1'; font-weight: normal; font-style: normal;
}
table {
  margin-top:50px;
}
section {
  margin-top:50px;
  
  

}
.colored {
  background-color: #CCEEFF;
  padding:10px;
}
h1 {
  margin-bottom:10px;
  font-weight:bold;
}
span.m {
  margin-right: 20px;
}
@font-face {
    font-family: 'MICR E13B 2.1';
    src: url('/MICRE13B21BT.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
</style>
