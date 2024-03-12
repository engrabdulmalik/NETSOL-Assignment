<template>
  <div>
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
        <div class="text1">UK</div>

        <div class="text2">UK</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
}

.text1 {
  color: white;
  border-bottom: 1px solid white;
  margin-bottom: 2rem;
}

.text2 {
  color: #00eaff;
  border-bottom: 1px solid #00eaff;
  padding-top: 2rem;
}
</style>
