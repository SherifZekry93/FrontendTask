<template>
  <div>
    <div class="error-message" v-if="err">{{err}}</div>
    <div class="loading-flash" v-if="loading">Loading Data</div>
    <div v-if="!loading && user !== null">
      <header class="profile-info">
        <div>
          <img class="profile-picture" :src="user.src" alt="Profile Picture" />
        </div>
        <div class="social-info">
          <font-awesome-icon icon="address-book" size="2x" @click="showData('name')" />
          <font-awesome-icon icon="blog" size="2x" @click="showData('notsure')" />
          <font-awesome-icon icon="envelope" size="2x" @click="showData('email')" />
          <font-awesome-icon icon="birthday-cake" size="2x" @click="showData('birthDate')" />
          <font-awesome-icon icon="key" size="2x" @click="showData('key')" />
          <font-awesome-icon icon="phone" size="2x" @click="showData('phone')" />
        </div>
      </header>
      <div class="about-me">About me:</div>
      <div class="sub-about" v-if="dataToShow.name">Hi I'm {{user.name}}</div>
      <div class="sub-about" v-if="dataToShow.email">my email is {{user.email}}</div>
      <div class="sub-about" v-if="dataToShow.address">I live in {{user.city}} in {{user.state}}</div>
      <div
        class="sub-about"
        v-if="dataToShow.phone"
      >Feel free to contact my phone number: {{user.phone}} or my cell {{user.cell}}</div>
      <div
        class="sub-about"
        v-if="dataToShow.birthDate"
      >I was born on {{new Date(user.dateOfBirth).toLocaleDateString('en-GB')}} I'm {{user.age}} years old</div>
    </div>
    <div
      class="sub-about"
      v-if="dataToShow.notsure"
    >Not sure what to include here but the key to my heart is programming and I'm interested in working for your company</div>
    <div class="sub-about" v-if="dataToShow.key">key to my heart is programming</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataToShow: {
        name: true,
        email: false,
        address: false,
        phone: false,
        birthDate: false,
        notsure: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
  methods: {
    setDataToFalse() {
      for (let key in this.dataToShow) {
        if (this.dataToShow.hasOwnProperty(key)) {
          this.dataToShow[key] = false;
        }
      }
    },
    showData(key) {
      this.setDataToFalse();
      this.dataToShow[key] = true;
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
    err() {
      return this.$store.getters.getError;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.loading-flash {
  color: black;
  animation-name: loading;
  height: 100px;
  line-height: 100px;
  text-align: center;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  font-size: 35px;
}
@keyframes loading {
  from {
    color: black;
  }
  to {
    color: lightgray;
  }
}

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
    svg {
      cursor: pointer;
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
  font-size: 37px;
  @media (min-width: 577px) {
    text-align: center;
  }
}
.error-message {
  background-color: red;
  padding: 10px;
  color: #fff;
}
</style>