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
      <div class="dropdown">
        <!-- Button that toggles the dropdown -->
        <button class="dropbtn">Regions</button>

        <!-- Dropdown content -->
        <div class="dropdown-content">
          <!-- Dropdown links -->
          <router-link to="/en-US" class="link1">USA</router-link>
          <router-link to="/en-UK" class="link1">UK</router-link>
          <router-link to="/en-China" class="link1">China</router-link>
          <router-link to="/en-Pakistan" class="link1">Pakistan</router-link>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="btn-con">
        <section class="initial-btn">News and Insights</section>
      </div>
      <section class="hero">
        <h2>Latest Insights from Leading Voices</h2>
        <p>
          Solving the world's problems through technology wouldn't be possible
          without our most important <br />invention: the NetSol. Have a look at
          our talented teams.
        </p>
        <a href="#">View All News</a>
      </section>

      <section class="events">
        <article class="event">
          <div>
            <img src="~/assets/card1image.png" alt="Leasing Life Logo" />
          </div>
          <div>
            <button>News</button>
            <h2>Leasing Life Conference & Awards</h2>
            <p>
              Solving the world's problems through technology wouldn't be
              possible without our most important invention.
            </p>
          </div>
        </article>
        <article class="event">
          <div>
            <img src="~/assets/card2image.png" alt="Leasing Life Logo" />
          </div>
          <div>
            <button>News</button>
            <h2>Auto Finance Summit 2023</h2>
            <p>
              Solving the world's problems through technology wouldn't be
              possible without our most important invention.
            </p>
          </div>
        </article>
        <article class="event">
          <div>
            <img src="~/assets/card3image.png" alt="Leasing Life Logo" />
          </div>
          <div>
            <button>News</button>
            <h2>Careers at Netsol</h2>
            <p>
              Solving the world's problems through technology wouldn't be
              possible without our most important invention.
            </p>
          </div>
        </article>
        <article class="event">
          <div>
            <img src="~/assets/card4image.png" alt="Leasing Life Logo" />
          </div>
          <div>
            <button>News</button>
            <h2>Leasing Life Conference & Awards</h2>
            <p>
              Solving the world's problems through technology wouldn't be
              possible without our most important invention.
            </p>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap");

.container {
  color: #ffffff;
  font-family: "Cabin";
  height: 1080px;
  width: 1920px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 1080px;
  width: 1920px;
  z-index: 0;
  overflow: hidden;
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
  overflow: hidden;
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

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.nav {
  display: flex;
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-right: 20px;
}

.nav a {
  text-decoration: none;
  color: black;
}

.dropdown {
  position: relative;
  display: inline-block;
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
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #092530;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  width: 268px;
  height: 268px;
  border-radius: 15px;
  border: 0.5px;
}

/* Style the dropdown links */
.dropdown-content a {
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown when the button is hovered over */
.dropdown:hover .dropdown-content {
  display: block;
}

.link1 {
  border-bottom: 1px solid #ffffff;
  width: 200px;
  height: 33px;
  margin-left: 1rem;
  margin-top: 0.25rem;
  font-size: 24px;
  font-weight: 250;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.main {
  padding: 20px;
  height: 1277px;
}
.btn-con {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  padding: 11px, 20px, 11px, 20px;
  border-radius: 20px;
  border: 1px;
  gap: 10px;
}
.initial-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: black;
  border-radius: 100px;
  color: white;
  height: 2rem;
  width: 10rem;
  background: linear-gradient(89.97deg, #030a2d -0.5%, #030616 99.97%);
  width: 241px;
  height: 39px;
  border: 1px solid;
  border-image-source: linear-gradient(90deg, #2b3561 0%, #313651 101.04%);
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
}
.hero {
  text-align: center;
  margin-bottom: 20px;
}

.hero h2 {
  font-size: 56px;
  font-weight: 500;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: center;
}

.hero p {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
}

.hero a {
  color: #ffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.leasing-life {
  text-align: center;
  margin-bottom: 20px;
}

.leasing-life img {
  width: 200px;
  height: auto;
}

.events {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.75rem;
  height: 433px;
  width: 404px;
}

.event {
  padding: 20px;
}

.event img {
  width: 404px;
  height: 250px;
  top: 471px;
  margin-bottom: 1rem;
  border-radius: 10px;
}
.event button {
  color: #18ebfe;
  background-color: #ffffff1a;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 5px;
}

.event h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.event p {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
}
.footer {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
}

/* Media Queries */

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav {
    align-items: center;
    justify-content: center;
  }
  .events {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 0.75rem;
  }
  .container {
    color: #ffffff;
    font-family: "Cabin";
    height: 1920px;
    width: auto;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .bg-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 1920px;
    width: auto;
    z-index: 0;
    overflow: hidden;
  }
}
</style>
