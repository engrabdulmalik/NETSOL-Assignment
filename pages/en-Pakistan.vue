<template>
  <div class="bg-container">
    <div class="backround">
      <div class="bg">
        <div class="rectangle4"></div>
        <div class="rectangle3"></div>
        <div class="rectangle2"></div>
        <div class="gradient">
          <div class="ellipse1"></div>
          <div class="ellipse2"></div>
          <div class="ellipse3"></div>
          <div class="ellipse4"></div>
        </div>
      </div>
      <div class="rectangle1"></div>
      <div class="background-image"></div>
    </div>
  </div>
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
        <div class="text1">Pakistan</div>

        <div class="text2">Pakistan</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  color: #ffffff;
  font-family: "Cabin";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* background */
.background {
  position: absolute;
  width: 2074.83px;
  height: 2529px;
  left: 0px;
  top: -554px;
}

/* cloud-storage-background-business-network-design (1) 1 */
.background-image {
  position: absolute;
  width: 1920px;
  height: 1280px;
  left: 0px;
  top: 0px;

  background: url("../assets/bg.png");
  z-index: -1;
}

/* Rectangle 1 */
.rectangle1 {
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;

  background: #02061c;
  opacity: 0.5;
}

/* bg */
.bg {
  position: absolute;
  width: 2074.83px;
  height: 2529px;
  left: 0px;
  top: -554px;
}

/* gradient */
.gradient {
  position: absolute;
  width: 2115.48px;
  height: 769.27px;
  left: 35px;
  top: 941.87px;

  opacity: 0.2;
  transform: rotate(-45deg);
}

/* Ellipse 1472 */
.ellipse4 {
  position: absolute;
  width: 1348.76px;
  height: 696.27px;
  left: 372.29px;
  top: 707.82px;

  filter: blur(100px);
  transform: rotate(-45deg);
}

/* Ellipse 1471 */
.ellipse3 {
  position: absolute;
  width: 1348.76px;
  height: 696.27px;
  left: 527.34px;
  top: 1434.21px;

  filter: blur(100px);
  transform: matrix(0.71, -0.71, -0.71, -0.71, 0, 0);
}

/* Ellipse 1469 */
.ellipse2 {
  position: absolute;
  width: 1348.76px;
  height: 696.27px;
  left: 2045.84px;
  top: -39.03px;

  mix-blend-mode: overlay;
  filter: blur(100px);
  transform: rotate(135deg);
}

/* Ellipse 1473 */
.ellipse1 {
  position: absolute;
  width: 1348.76px;
  height: 696.27px;
  left: 303.7px;
  top: 718.43px;

  mix-blend-mode: overlay;
  filter: blur(100px);
  transform: rotate(-45deg);
}

/* Rectangle 34624146 */
.rectangle2 {
  position: absolute;
  visibility: hidden;
  width: 1920px;
  height: 585px;
  left: -34px;
  top: -641px;

  background: conic-gradient(
    from -67.22deg at 50% 41.12%,
    #00eaff -61.63deg,
    #0534a9 15.64deg,
    #00eaff 151.75deg,
    #0534a9 185.19deg,
    #00eaff 298.37deg,
    #0534a9 375.64deg
  );
  opacity: 0.4;
}

/* Rectangle 34624147 */
.rectangle3 {
  position: absolute;
  visibility: hidden;
  width: 1920px;
  height: 585px;
  left: -34px;
  top: 1418px;

  background: conic-gradient(
    from -67.22deg at 50% 41.12%,
    #00eaff -61.63deg,
    #0534a9 15.64deg,
    #00eaff 151.75deg,
    #0534a9 185.19deg,
    #00eaff 298.37deg,
    #0534a9 375.64deg
  );
  opacity: 0.4;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

/* Rectangle 34624145 */
.rectangle4 {
  position: absolute;
  width: 1920px;
  height: 1987px;
  left: 0px;
  top: -12px;

  background: rgba(1, 5, 20, 0.01);
  backdrop-filter: blur(65px);
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
  margin-left: 2.5rem;
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
@media (max-width: 768px) {
  .bg-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 275vh;
  width: 100vw;
  z-index: 0;

}


.container {
  color: #ffffff;
  font-family: "Cabin";
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
 overflow: visible;
}

.header {
  width:90%;
  height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 275vh;
  left: 0px;
  top: -554px;

}
.events {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.75rem;
  height: 433px;
  width: 75vw;
}
.card-main{
  display: flex;
  justify-content: center;
  align-items: center;

}
.rectangle1 {
  position: absolute;
  width: 1920px;
  height: 2600px;
  left: 0px;
  top: 0px;

  background: #02061c;
  opacity: 0.85;
}

}
</style>
