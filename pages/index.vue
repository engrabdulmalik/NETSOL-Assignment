<template>
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
          <router-link to="/en-US">USA</router-link>
          <router-link to="/en-UK">UK</router-link>
          <router-link to="/en-China">China</router-link>
          <router-link to="/en-Pakistan">Pakistan</router-link>
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
  background: conic-gradient(
    from 45deg,
    #4328f2 100%,
    #47fda5 100%,
    #47fda5 100%,
    #4328f2 100%
  );
  /* background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center; */

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
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Style the dropdown links */
.dropdown-content a {
  color: black;
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

.main {
  padding: 20px;
}
.btn-con {
  display: flex;
  align-items: center;
  justify-content: center;
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
  }

  .nav {
    justify-content: center;
  }
}
</style>
