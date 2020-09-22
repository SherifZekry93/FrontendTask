<template>
  <div class="contact-me-form">
    <h3>Contact Me</h3>
   <p v-if="errors.length && !isValidForm">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </p>
    <form @submit="checkForm">
      <div class="underlined-input">
        <input placeholder="Name" type="text" value v-model="name" />
      </div>
      <div class="underlined-input">
        <input type="text" placeholder="Email" value v-model="email" />
      </div>
      <div class="text-area-container">
        <textarea
          v-model="message"
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          placeholder="How can I help?"
        ></textarea>
      </div>
      <button
        class="slide_from_left"
        @click="sendEmail()"
        v-bind:class="{ 'text-green': isValidForm }"
      >Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: [],
    };
  },
  methods: {
    sendEmail() {},
    checkForm: function (e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Please insert Name");
      }
      if (!this.message) {
        this.errors.push("please insert message");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      e.preventDefault();
      
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed: {
    isValidForm() {
      return this.name !== "" && this.email !== "" && this.message !== "" && this.validEmail(this.email);
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-me-form {
  width: 100%;
  @media (min-width: 577px) {
    width: 400px;
    margin: 10px auto;
  }
  .underlined-input {
    height: 30px;
    margin-bottom: 15px;
    input {
      height: 17px;
      border: 0;
      width: calc(100% - 4px);
      border-radius: 0.25rem;
      box-shadow: -8px 10px 0px -7px #ebebeb, 8px 10px 0px -7px #ebebeb;
      -webkit-transition: box-shadow 0.3s;
      transition: box-shadow 0.3s;
    }
    input:focus {
      outline: none;
      box-shadow: -8px 10px 0px -7px #4ea6ea, 8px 10px 0px -7px #4ea6ea;
    }
  }
  .text-area-container {
    width: 100%;
    textarea {
      width: calc(100% - 4px);
      outline: none;
      border: 1px solid #ccc;
      &:focus {
        border: 1px solid #4ea6ea;
      }
    }
  }
  button {
    width: 100%;
    min-height: 40px;
    transition: background 0.7s ease-in-out;
    background-color: red;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 18px;
    padding: 10px;
    font-weight: 700;
    letter-spacing: 3px;
    @media (min-width: 577px) {
      width: 250px;
    }
  }
  .text-green {
    background-color: green;
  }
}
</style>