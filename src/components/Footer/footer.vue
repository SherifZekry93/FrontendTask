<template>
  <footer>
    <div>
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="2x" />
    </div>
    <div>
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="2x"/>
    </div>
    <div>
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="2x"/>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
    footer{
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
</style>