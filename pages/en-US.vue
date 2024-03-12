<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        <h1>NETSOL</h1>
      </div>
      <div>
        <router-link to="/"><button class="dropbtn">Home</button></router-link>
      </div>
    </header>
    <div class="main">
      <div class="card">
        <div class="text1">USA</div>

        <div class="text2">USA</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  color: #ffffff;
  font-family: "Cabin";
  height: 100vh;
  width: 100vw;
  
}
.header {
  width: 1780px;
  height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Style the button that will toggle the dropdown */
.dropbtn {
  background: radial-gradient(circle, #0025ce 100%, #095de6 53%);
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 177px;
  height: 40px;
  top: 21px;
  border-radius: 100px;
  border: 1px;
}

/* Style the dropdown content (hidden by default) */

/* Show the dropdown when the button is hovered over */

.card {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  height: 15vh;
  width: 40vh;
  border: 1px dotted #9747ff;
  background-color: black;
  padding: 3rem;
  border-radius: 15px;
}

.text1 {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  width: 350px;
  height: 33px;
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 24px;
  font-weight: 250;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.text2 {
  color: #00eaff;
  border-bottom: 1px solid #ffffff;
  width: 350px;
  height: 33px;
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 24px;
  font-weight: 250;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
