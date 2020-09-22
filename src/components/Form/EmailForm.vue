<template>
  <div class="contact-me-form">
    <h3>Contact Me</h3>
    <div class="underlined-input">
      <input placeholder="Name" type="text" value />
    </div>
    <div class="underlined-input">
      <input type="email" placeholder="Email" value />
    </div>
    <div class="text-area-container">
      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="How can I help?"></textarea>
    </div>
    <button class="slide_from_left">Submit</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:'',
      email:'',
      message:''
    }
  }
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
    @media (min-width:577px) {
      width: 250px
    }
  }
}
</style>