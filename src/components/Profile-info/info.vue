<template>
  <div>
    <header class="profile-info">
      <div>
        <img class="profile-picture" :src="src" alt="Profile Picture" />
      </div>
      <div class="social-info">
        <font-awesome-icon icon="address-book" size="2x" />
        <font-awesome-icon icon="blog" size="2x" />
        <font-awesome-icon icon="envelope" size="2x" />
        <font-awesome-icon icon="birthday-cake" size="2x" />
        <font-awesome-icon icon="key" size="2x" />
        <font-awesome-icon icon="phone" size="2x" />
      </div>
    </header>
    <div class="about-me">About me:</div>
    <div class="sub-about">Hi I'm {{name}} my email is {{email}} I live in {{city}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      src: "",
      email: "",
      city: "",
      state: "",
    };
  },
  mounted() {
    fetch("https://randomuser.me/api", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        const results = data.results[0];
        console.log(results.picture);
        this.name = results.name.first + " " + results.name.last;
        this.email = results.email;
        this.src = results.picture.large;
        this.city = results.location.city;
        this.state = results.location.state;
      });
  },
  computed: {
    getInfo() {
      let allData;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.profile-info {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .profile-picture {
    width: 180px;
    height: 180px;
    border: 1px solid lightgray;
    border-radius: 50%;
    display: inline-block;
    line-height: 180px;
  }
  @media (max-width: 576px) {
    .profile-picture {
      width: 130px;
      height: 130px;
      line-height: 130px;
    }
  }
  @media (min-width: 577px) {
    display: block;
    .profile-picture {
      margin: 10px auto;
      display: block;
    }
  }
  .social-info {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    width: 50%;
    @media (min-width: 577px) {
      display: inline-flex;
      justify-content: center;
      width: 100%;
      text-align: center;
    }
  }
}
.about-me {
  margin-top: 30px;
  font-family: "Pacifico", cursive;
  font-size: 35px;
  @media (min-width: 577px) {
    text-align: center;
  }
}
.sub-about {
  font-family: "Satisfy", cursive;
  @media (min-width: 577px) {
    text-align: center;
  }
}
</style>